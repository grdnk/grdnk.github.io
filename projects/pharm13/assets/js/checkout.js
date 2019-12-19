function Checkout() {
    this.init();
}

Checkout.prototype.init = function () {
    $('#promocode').blur(function (e) {
        e.preventDefault();

        this.applyPromocode();
    }.bind(this));

    var self = this;
    $('.billing-radio').change(function () {
        self.onFieldChanged('billing', $(this).val(), this);
    });

    $('.checkout-field').change(function () {
        self.onFieldChanged($(this).attr('name'), $(this).val(), this);
    });

    $('#place-order').click(function (e) {
        e.preventDefault();

        this.onFormSubmit();
    }.bind(this));

    $('#one-click-buy').click(function (e) {
        e.preventDefault();

        self.oneClickBuy($(this).data('id'));
    });

    $('#one-click-confirm').click(function (e) {
        e.preventDefault();

        this.oneClickConfirm();
    }.bind(this));
};

Checkout.prototype.applyPromocode = function () {
    $('#promocode-error').html('');
    $.post("/api/cart_promocode", {promocode: $('#promocode').val()})
        .done(function(data) {
            data = JSON.parse(data);

            if (data.status) {
                $('#checkout-sum').html(data.discount_subtotal);
                $('#checkout-total-sum').html(data.discount_sum);

                $('#discount-sum').html(data.discount);
                $('#discount').show();
            } else {
                $('#promocode-error').html(data.error);
            }
        });
};

Checkout.prototype.onFieldChanged = function (field, value, el) {
    $(el).parent().find('.invalid-feedback').html('');

    $.post("/api/order_field", {field: field, value: value})
        .done(function (data) {
            data = JSON.parse(data);
            if (!data.status && data.error) {
                $(el).parent().find('.invalid-feedback').html(data.error);
            }
        });
};

Checkout.prototype.onFormSubmit = function () {
    $('#address-error').hide();

    console.log($('#addr-id').val());
    if (0 <= $('#addr-id').val()) {
        $('#checkout-form').submit();
    } else {
        $('#address-error').show();
    }
};

Checkout.prototype.oneClickBuy = function (id) {
    $('#one-click-product-id').val(id);

    $('#oneClickModal').modal('show');
};

Checkout.prototype.oneClickConfirm = function () {
    var id = $('#one-click-product-id').val();
    var name = $('#one-click-name').val();
    var phone = $('#one-click-phone').val();

    $('#one-click-name-error').html('');
    $('#one-click-phone-error').html('');

    $.post("/api/order_one", {id: id, name: name, phone: phone})
        .done(function (data) {
            data = JSON.parse(data);
            if (!data.status) {
                $('#one-click-name-error').html(data.errors.name);
                $('#one-click-phone-error').html(data.errors.phone);
            } else {
                location.href = '/thank';
            }
        });
};

new Checkout();