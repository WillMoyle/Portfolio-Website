var showPortfolio = function() {
    $("#projects").slideDown();
}

var hidePortfolio = function() {
    $("#projects").slideUp();
}

var main = function() {
    $("#projects").hide();
    var portLinkPos = $("#port_link").position();
    $("#projects").css({"left":portLinkPos.left, "top":"6em"});
}

$(document).ready(main);
$("#port_link").hover(showPortfolio, hidePortfolio);
$("#projects").hover(showPortfolio, hidePortfolio);
$("#port_link").click(showPortfolio, hidePortfolio);