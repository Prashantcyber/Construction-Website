$(".menu").click(function(){
    $(this).toggleClass("active");
    $(".collapse").slideToggle();
});

if( screen.width<768 ){
    $(".collapse a").click(function(){
        $(".menu").removeClass("active");
        $(".collapse").slideUp();
    })
}