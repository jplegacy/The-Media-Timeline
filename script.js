$(".main").hide();
$(".startButton2").hide();
$(".sBox").hide();

var secret = 0;

$(".startButton").click(function() {
    $(".startingScreen").fadeOut(300);
    $(".main").delay(300).fadeIn(300);
   
});

$(".startButton1").click(function() {

    $(".main").fadeOut(300);
     $(".startingScreen").delay(300).fadeIn(300);  
    $(".startButton2").show();
});
$(".startButton2").click(function() {
    
    $(".startingScreen").fadeOut(300);  
    $(".sBox").delay(300).fadeIn(300);
    $("body").css("background","url('https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif')");
     $("body").css("animation","none");
});