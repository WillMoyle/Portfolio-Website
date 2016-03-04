/* Toggle visibility of list of portfolio items in side menu */
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

/* Toggle visibility of list of blog posts in side menu */
var blog_visible = false;

var toggle_blog = function() {
    if (blog_visible) {
        $('#blog_link .fa').removeClass('fa-chevron-down');
        $('#blog_link .fa').addClass('fa-chevron-right');
        $('.blog').stop().slideUp();
    }
    else {
        $('#blog_link .fa').removeClass('fa-chevron-right');
        $('#blog_link .fa').addClass('fa-chevron-down');
        $('.blog').stop().slideDown();
    }
    blog_visible = !blog_visible;
}

/* Toggle visibility of list of side menu */
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

/* Main function */
var main = function() {
    
    /* If Safari browser, header and footer must be absolute */
    if (navigator.userAgent.indexOf('Safari') != -1
        && navigator.userAgent.indexOf('Chrome') == -1) {
        $('header').css('position','absolute');
        $('footer').css({'position':'absolute', 'bottom': '0'});
    }
    
    /* Make menu disappear on swipe or scroll left */
    $(document).on("swipeleft",function(){
                   if (menu_visible) {
                   toggle_menu();
                   }
              });
    var lastScrollLeft = 0;
    $(window).scroll(function() {
                     var documentScrollLeft = $(document).scrollLeft();
                     if (menu_visible && lastScrollLeft < documentScrollLeft) {
                     toggle_menu();
                     }
                     });
    
    /* Click events for menu and sub menus */
    $('.project, .blog').toggle();
    $('.icon-menu, .icon-close').click(toggle_menu);
    $('#port_link').click(toggle_portfolio);
    $('#blog_link').click(toggle_blog);
}

$(document).ready(main);

