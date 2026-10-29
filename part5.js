$(".thumbnail").click(function(){
    $(this).fadeOut(400, function(){
        $(this).fadeIn();

        $(this).animate({
            width: "280px",
            height: "190px"
        }, {
            duration: 800,
            queue: false
        });
    });
});