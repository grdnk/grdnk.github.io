function display_hide (cookies)
{ 
    if ($(cookies).css('display') == 'block') 
        {
            $(cookies).animate({height: 'hide'}, 200);
        } 
}