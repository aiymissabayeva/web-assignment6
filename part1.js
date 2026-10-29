$(document).ready(function() {
    console.log("jQuery is ready!")
});

$("#btn").click(function(){
    $("#text").text("Bye!");
    $(".wlcm").html("<b>Welcome!</b>");
    $("#Task1 p").css("font-size", "25px");
});

$("#btn-css").click(function(){
    $("#text").css("color", "red");
    $(".wlcm").css("color", "blue");
})