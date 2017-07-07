jQuery(function(){
    var subtitle = $(".site-subtitle").html();
    var blink = "<span class=\"blink\">$</span>";
    $(".site-subtitle").html(subtitle.replace("$",blink));
});
