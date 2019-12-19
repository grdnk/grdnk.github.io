$('#sort').change(function () {
    var val = parseInt($(this).val());

    var sort = '';
    var sort_dir = 1;
    switch (val) {
        case 1:
            sort = 'price';
            sort_dir = 1;
            break;

        case 2:
            sort = 'price';
            sort_dir = -1;
            break;

        case 3:
            sort = 'is_hot';
            sort_dir = -1;
            break;

        case 4:
            sort = 'is_new';
            sort_dir = -1;
            break;
    }

    $('#sort-field').val(sort);
    $('#sort-dir-field').val(sort_dir);

    $('#sort-form').submit();
});

$('#subscribe-btn').click(function (e) {
    e.preventDefault();

    var email = $('#subscribe-email').val();
    $.post("/api/subscribe", {email: email})
        .done(function(data) {
            $('#subscribe-email ~ .invalid-feedback').html('');

            data = JSON.parse(data);
            if (data.status) {
                $('#subscribe-email').val('');

                $('#subsModal').modal('show');
            } else {
                $('#subscribe-email ~ .invalid-feedback').html(data.errors.email);
            }
        });
});

$('#contacts-send').click(function (e) {
    e.preventDefault();

    $.post("/api/contacts_request", {name: $('#contacts-name').val(), phone: $('#contacts-phone').val()})
        .done(function(data) {
            $('#contacts-name ~ .invalid-feedback').html('');
            $('#contacts-phone ~ .invalid-feedback').html('');

            data = JSON.parse(data);
            if (data.status) {
                $('#contacts-name').val('');
                $('#contacts-phone').val('');

                $('#messageModal').modal('show');
            } else {
                $('#contacts-name ~ .invalid-feedback').html(data.errors.name);
                $('#contacts-phone ~ .invalid-feedback').html(data.errors.phone);
            }
        });
});

$('#delivery-send').click(function (e) {
    e.preventDefault();

    $.post("/api/delivery_request", {
        name: $('#delivery-name').val(),
        email: $('#delivery-email').val(),
        question: $('#delivery-question').val()
    })
        .done(function(data) {
            $('#delivery-name ~ .invalid-feedback').html('');
            $('#delivery-email ~ .invalid-feedback').html('');
            $('#delivery-question ~ .invalid-feedback').html('');

            data = JSON.parse(data);
            if (data.status) {
                $('#delivery-name').val('');
                $('#delivery-email').val('');
                $('#delivery-question').val('');

                $('#messageModal').modal('show');
            } else {
                $('#delivery-name ~ .invalid-feedback').html(data.errors.name);
                $('#delivery-email ~ .invalid-feedback').html(data.errors.email);
                $('#delivery-question ~ .invalid-feedback').html(data.errors.question);
            }
        });
});

$('#scroll-to-top').click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
});