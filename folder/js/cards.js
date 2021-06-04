
function hideScroll() {
    document.body.classList.add('no-scroll');

    document.body._scrollTop = window.pageYOffset;
    document.body.style.position = 'fixed';
    if (document.body._hasScrollbar) {
        document.body.style.width = `calc(100% - ${document.body._getScrollbarSize()}px)`;
    } else {
        document.body.style.width = '100%';
    }
    document.body.style.top = -document.body._scrollTop + 'px';
}

function _getScrollbarSize() {
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(outer);

    let widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    let inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    let widthWithScroll = inner.offsetWidth;

    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

function _hasScrollbar() {
    return document.body.scrollHeight > document.body.clientHeight;
}

function showScroll() {
    document.body.classList.remove('no-scroll');

    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scroll(0, document.body._scrollTop);
}


let anim = $('.cases__item').parent().find('.block-anim');

    $('.cases__item').on('click', function(){

        hideScroll();
        var $this = $( this );

        $(this).parent().find('.block-anim').addClass('is-active');

        if($(this).parent().find('.block-anim').hasClass('is-active')) {
        $(this).parent().find('.block-anim').animate({'width': '100%'}, 400, 'swing', function(){
            $(this).parent().find('.block-anim').css({'left': 0, 'right': ''});
        });

    };
   
   
    $('.content__back').on('click', function(){
           anim.removeClass('is-active');
           showScroll();

        //    setTimeout(function() {
        //     anim.animate({'width': '0'}, 400, 'swing', function(){
        //         anim.css({'right': 0, 'left': ''});
        //         showScroll();
        //        });
        //     }, 300 );

           anim.animate({'width': '0'}, 400, 'swing', function(){
             anim.css({'right': 0, 'left': ''});
            //  showScroll();
            });

    });
   
   
});
