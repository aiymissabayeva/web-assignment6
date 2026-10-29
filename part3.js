$("#appendBtn").click(function(){
    $("#List").append("<li>New Item</li>");
});

$("#prependBtn").click(function(){
    $("#List").prepend("<li>New Item</li>");
});

$("#removeBtn").click(function(){
    $("#List li:last").remove();
});

$("#srcBtn").click(function(){
    $("#img").attr("src", "images.jpeg");
});

$("#hrefBtn").click(function(){
    $("#link").attr("href","https://learn.astanait.edu.kz/login?next=/dashboard");
});