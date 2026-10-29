$("#appendBtn").click(function(){
    $("#List").append("<li>New Item</li>");
});

$("#prependBtn").click(function(){
    $("#List").prepend("<li>New Item</li?");
});

$("#removeBtn").click(function(){
    $("#List li:last").remove();
});