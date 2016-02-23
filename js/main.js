var showPortfolio = function() {
    var portLinkPos = $("#port_link").position();
    $("#projects").css({"left":portLinkPos.left, "top":"6em", "height":"auto"});
    $("#projects").stop().slideDown();
}

var hidePortfolio = function() {
    $("#projects").stop().slideUp();
}

var main = function() {
    $("#projects").hide();
    $("#projects").css("visibility", "visible");
    var portLinkPos = $("#port_link").position();
    $("#projects").css({"left":portLinkPos.left, "top":"6em"});
}

$(document).ready(main);
$("#port_link").hover(showPortfolio, hidePortfolio);
$("#projects").hover(showPortfolio, hidePortfolio);
$("#port_link").click(showPortfolio, hidePortfolio);