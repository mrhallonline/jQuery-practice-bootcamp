$("h1").text("Bye!");

$("button").text("Don't Click Me!");

$("button").html("<em>Hey</em>");

// Manipulating Attributes
$("img").attr("src");
$("a").attr("href", "https://www.yahoo.com");
// identify class
$("h1").attr("class");


// Adding Event Listeners
$("h1").click(function () {
    $("h1").css("color", "Purple");
})
// To multiple buttons
// JS
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}

// jQuery
// Click Listener
$("button").click(function(){
    $("h1").css("color", "purple");

});

// KeyPress Listener
$(document).keydown( function(event){
    console.log(event.key);
    $("h1").text(event.key);
});

// On Method
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
});

//Adding and Removing Elements with jQuery
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// $("button").remove();

// Animation with jQuery
//Hide Button
// $("button").on("click", function(){
//     $("h1").fadeOut();
//     $("h1").fadeIn();
// });
// $("h1").hide();
// $("h1").show();
// $("h1").toggle();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToggle();
// $("h1").slideUp();
// $("h1").slideDown();
// $("h1").slideToggle();

// Define Animations:
// Change Opacity
$("button").on("click", function(){ 
    $("h1").animate({opacity: 0.5});

});
// Animate Margin
$("h1").animate({margin: 20});
$("h1").animate({margin: "20%"});

Chaining Animations
$("h1")
