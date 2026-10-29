$("#animateBtn").click(function(){
    $("#box").animate({
        width: "200px",
        height: "200px",
        left: "200px",
        top: "100px"
    }, 1000);
});

$("#animateBtn1").click(function(){
    $("#box1").animate({
        left: "200px"
    }, 500)
    $("#box1").animate({
        top: "100px"
    }, 500)
    $("#box1").animate({
        width: "40px",
        height: "40px"
    }, 500)
    $("#box1").animate({
        top: "10px",
        left: "10px",
        width: "80px",
        height: "80px"
    }, 500);
});
