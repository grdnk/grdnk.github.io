$('.address-edit').click(function (e) {
    e.preventDefault();
    var id = $(this).data('id');

    $('#address-group-' + id).removeClass('disabled-inputs');
    $('#address-group-' + id + ' input').removeAttr('disabled');
    $('#save-address-' + id).show();
});

$('#address-new').click(function (e) {
    $('#address-new-form').show();
    $(this).hide();
});

$('.save-address').click(function (e) {
    e.preventDefault();
    var id = $(this).data('id');

    $('#error-country-' + id).html('');
    $('#error-city-' + id).html('');
    $('#error-line-' + id).html('');

    $.post("/api/address", {id: id, country: $('#address-country-' + id).val(), city: $('#address-city-' + id).val(), line: $('#address-line-' + id).val()})
        .done(function(data) {
            data = JSON.parse(data);

            if (data.status) {
                $('#address-group-' + id).addClass('disabled-inputs');
                $('#address-group-' + id + ' input').attr('disabled', 'disabled');
                $('#save-address-' + id).hide();
            } else {
                $('#error-country-' + id).html(data.errors.country);
                $('#error-city-' + id).html(data.errors.city);
                $('#error-line-' + id).html(data.errors.line);
            }
        });
});

$('.save-address-new').click(function (e) {
    e.preventDefault();

    $('#new-error-country').html('');
    $('#new-error-city').html('');
    $('#new-error-line').html('');

    $.post("/api/address", {country: $('#new-address-country').val(), city: $('#new-address-city').val(), line: $('#new-address-line').val()})
        .done(function(data) {
            data = JSON.parse(data);

            if (data.status) {
                if (window.addr_new) {
                    location.href = '/checkout';
                } else {
                    location.reload();
                }
            } else {
                $('#new-error-country').html(data.errors.country);
                $('#new-error-city').html(data.errors.city);
                $('#new-error-line').html(data.errors.line);
            }
        });
});

$('.address-delete').click(function (e) {
    e.preventDefault();
    if (!confirm('Are you really want delete address?')) {
        return;
    }

    var id = $(this).data('id');

    $.post("/api/address_delete", {id: id})
        .done(function(data) {
            data = JSON.parse(data);

            if (data.status) {
                location.reload();
            }
        });
});

$('#change-address').click(function (e) {
    e.preventDefault();

    $('#address').hide();
    $('#address-select').show();
});

$('#addr-id').change(function (e) {
    var val = $(this).val();

    if (-1 == val) {
       location.href = '/personal/addresses?new=1';
    }

    $('#addr-zipcode').html(window.addresses[val].zipcode);
    $('#addr-city').html(window.addresses[val].city);
    $('#addr-line').html(window.addresses[val].line);

    $('#address').show();
    $('#address-select').hide();

    $.post("/api/order_field", {field: 'addr_id', value: val});
});