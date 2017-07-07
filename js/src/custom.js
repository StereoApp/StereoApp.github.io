jQuery(function(){
    var subtitle = $(".site-subtitle").html();
    var blink = "<span class=\"blink\">>_</span>";
    $(".site-subtitle").html(subtitle.replace("$",blink));
});
