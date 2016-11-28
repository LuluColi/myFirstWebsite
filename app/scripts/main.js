console.log('\'Allo \'Allo!');


$(document).ready(function(){
	$('.hero-unit h1').mouseover(function(){
		$(this).fadeOut(1000)
	})
})
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}