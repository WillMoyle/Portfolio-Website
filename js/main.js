var portfolio_visible = false;

var toggle_portfolio = function() {
    if (portfolio_visible) {
        $('#port_link .fa').removeClass('fa-chevron-down');
        $('#port_link .fa').addClass('fa-chevron-right');
        $('.project').stop().slideUp();
    }
    else {
        $('#port_link .fa').removeClass('fa-chevron-right');
        $('#port_link .fa').addClass('fa-chevron-down');
        $('.project').stop().slideDown();
    }
    portfolio_visible = !portfolio_visible;
}

var menu_visible = false;

var show_menu = function() {
    $('.menu').animate({
                       left: "0px"
                       }, 200);
    
    $('body').animate({
                      left: "285px"
                      }, 200);
}

var hide_menu = function() {
    $('.menu').animate({
                       left: "-285px"
                       }, 200);
    
    $('body').animate({
                      left: "0px"
                      }, 200);
}

var toggle_menu = function() {
    if (!menu_visible) {
        show_menu();
    }
    else {
        hide_menu();
    }
    menu_visible = !menu_visible;
}

var main = function() {
    if (navigator.userAgent.indexOf('Safari') != -1
        && navigator.userAgent.indexOf('Chrome') == -1) {
        $('header').css('position','absolute');
        $('footer').css('position','absolute');
        if ($(document).height() < $('footer').top()) {
            $('footer').css('top', $(document).height());
        }
    }
    
    $('.project').toggle();
    $('.icon-menu, .icon-close').click(toggle_menu);
    $('#port_link').click(toggle_portfolio);
    
}

if ($('header').scrollLeft() != 0) {
    $('header').scrollLeft(0);
}
$(document).ready(main);

