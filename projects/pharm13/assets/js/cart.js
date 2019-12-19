function addToCart(itemId, qty, pack) {
    qty = qty || 1;
    pack = pack || 0;

    if (itemId) {
        $.post("/api/cart_add", {itemId: itemId, qty: qty, pack: pack})
            .done(function(data) {
                data = JSON.parse(data);

                if (data.count > 0) {
                    $('.cart-btn').addClass('active');
                } else {
                    $('.cart-btn').removeClass('active');
                }
                $('#modal-cart-subtotal').html(data.subtotal);
                $('#modal-cart-shipping').html(data.shipping);
                $('#modal-cart-sum').html(data.sum);

                $('#cart-content').empty();
                Object.keys(data.cart).forEach(function (_id) {
                    item = data.cart[_id];

                    var bonus_line = (item.product.bonus) ? (', +' + item.product.bonus + ' ' + data.translate.bonus) : '';
                    $('#cart-content').append('<div class="shop-list-item d-flex align-items-center" id="cart-row-' + item.product.id + '-' + item.product.pack_no + '">' +
                        '<button type="submit" class="cart_remove" data-id="' + item.product.id + '" data-pack="' + item.product.pack_no + '"><img src="/assets/images/remove.svg" alt=""></button>' +
                        '<div class="product"><img src="' + window.upload_url + item.product.image + '" alt=""></div>' +
                        '<div>' +
                        '<h5 class="product-name">' + item.product.title + ', ' + item.product.dosage + '</h5>' +
                        '<p class="price"><span class="num">' + item.qty + '</span>' + item.product.price + '</p>' +
                        '<p class="pcs">' +
                        item.product.pack + ' ' + item.product.packing +
                        bonus_line +
                        '</p>' +
                        '</div>\n' +
                    '</div>');
                });

                $('#cart-modal').modal('show');
                initCartActions();
            });
    }
}

function removeFromCart(itemId, pack, needModal) {
    pack = pack || 0;

    $.post("/api/cart_delete", {itemId: itemId + '-' + pack})
        .done(function(data) {
            data = JSON.parse(data);
            $('#cart-row-' + itemId + '-' + pack).remove();

            $('#cart-sum').html(data.sum);
            $('#cart-total-sum').html(data.sum);
            $('#modal-cart-subtotal').html(data.subtotal);
            $('#modal-cart-shipping').html(data.shipping);
            $('#modal-cart-sum').html(data.sum);

            if (data.count > 0) {
                $('.cart-btn').addClass('active');
            } else {
                $('.cart-btn').removeClass('active');
                $('#cart-modal').modal('hide');

                if (needModal) {
                    $('#emptyModal').modal('show');
                }
            }
        });
}

function changeQty(itemId, pack, type) {
    pack = pack || 0;

    $.post("/api/cart_change_qty", {itemId: itemId + '-' + pack, type: type})
        .done(function(data) {
            data = JSON.parse(data);

            $('#cart-qty-' + itemId + '-' + pack).html(data.item_qty);
            $('#cart-sum-' + itemId + '-' + pack).html(data.item_sum);

            $('#cart-qty-' + itemId + '-' + pack).parent().parent().find('.num').html(data.item_qty);

            $('#cart-sum').html(data.sum);
            $('#modal-cart-sum').html(data.sum);
            $('#cart-total-sum').html(data.sum);
            $('#cart-shipping').html(data.shipping);

            if (data.shipping > 0) {
                $('.shipping-info').show();
            } else {
                $('.shipping-info').hide();
            }
        });
}

function initCartActions() {
    $('.cart_remove').unbind('click').click(function (e) {
        e.preventDefault();

        var itemId = $(this).data('id');
        var pack = $(this).data('pack');
        if (itemId !== undefined) {
            removeFromCart(itemId, pack, $(this).hasClass('need-modal'));
        }
    });

    $('.cart_qty_mod').unbind('click').click(function (e) {
        e.preventDefault();

        var itemId = $(this).data('id');
        var pack = $(this).data('pack');
        var type = $(this).data('type');
        if (itemId !== undefined && type !== undefined) {
            changeQty(itemId, pack, type);
        }
    });

    if (window.need_empty_modal) {
        $('#emptyModal').modal('show');
    }
}

$('.item-buy').click(function (e) {
    e.preventDefault();

    addToCart($(this).data('id'), 1, $(this).data('pack'));
});

window.product_qty = 1;
$('.product_qty_mod').click(function (e) {
    e.preventDefault();

    var type = $(this).data('type');
    if (type === 'add') {
        window.product_qty += 1;
    } else if (window.product_qty > 1) {
        window.product_qty -= 1;
    }

    $('#product-counter').html(window.product_qty);
});

$('#product-add').click(function (e) {
    e.preventDefault();

    addToCart($(this).data('id'), window.product_qty);
});

$('#close-cart').click(function (e) {
    e.preventDefault();

    $('#cart-modal').modal('hide');
});

$('.product-favorite').click(function (e) {
    e.preventDefault();

    var id = $(this).data('id');
    $.post("/api/favorite", {id: id})
        .done(function(data) {
            data = JSON.parse(data);

            if (data.status) {
                if (data.checked) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                    $('#favorite-' + id).remove();
                }
            } else {
                if (data.auth) {
                    $('#authModal').modal('show');
                }
            }
        }.bind(this));
});

initCartActions();