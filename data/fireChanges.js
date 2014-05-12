$("body.three-col .wrapper").css({"max-width": "900px"}); 
$(".global-nav .container").css({"max-width": "900px"});
$(".AppContent").css({"max-width": "900px", "margin": "0px auto"});
$(".ProfileCanopy--large .ProfileCanopy-header").css({ "height": "200px"});
$(".ProfileCanopy--large").css({ "height": "200px"});
$(".global-nav-inner").css({"background": "#3d3d3d"}); 
$(".nav > li > a, .nav > li > button").css({ "color": "rgb(187, 187, 187)"}); 
$("#message-drawer .message").css({ "background": "none repeat scroll 0% 0% rgb(255, 255, 255)", "padding": "6px" }); 
$(".stats a strong").css({"font-size":"14px"});
$(".dashboard-left").append($(".dashboard-right .Footer"));
$(".dashboard-right").css({"width": "0px"}); //Failsafe to hide this anyway
$(".dashboard-right").remove();
var side_bar_trends = $(".ProfileWTFAndTrends").parents(".Grid--withInnerPadding").parent();
var time_line = side_bar_trends.prev();
time_line.removeClass("u-size2of3");
side_bar_trends.remove();
