

(function() {


// VARIABLES

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var topSection = $(".top_section");
var bottomSection = $(".bottom_section");
var section = $(".section");
var goDown = $(".godown");
var pageOne = $(".page_one");


// SET PAGES

function setPages() {
	windowWidth = $(window).width(),
	windowHeight = $(window).height();
	// section.css({ "height": windowHeight, "width": windowWidth });
}

setPages();


// RESIZE

// $(window).resize(function(){
$(window).on('resize', function(){
	setPages();
	splitHalf();
});

$(window).on('scroll', function(){

	var st = $(window).scrollTop();

	// header
	var header = $('#header');

	if(st>$(window).height()){
		if( !header.hasClass("small-header") ) header.addClass("small-header");

	}else{
		if( header.hasClass("small-header") ) header.removeClass("small-header");

	}

	// parallax
	var dy = $(".page_two").position().top - st;

	if(st>0 && st<$('.page_one').height()+$('.page_two').height()){
		$(".jar").css({
			'transform': 'translateY('+ -dy*0.2 +'px) rotate('+(-dy*0.010)+'deg)'
		})
		$(".pill1").css({
			'transform': 'translateY('+ dy*1.2 +'px)'
		})

		$(".pill2").css({
			'transform': 'translateY('+ dy*0.4 +'px)'
		})

		$(".pill3").css({
			'transform': 'translateY('+ dy*0.1 +'px)'
		})

		$(".pagetwo_title").css({
			// 'transform': 'translateY('+ -dy*0.4 +'px)'
		})		
	}

})


// SPLIT PAGE 7

function splitHalf(){
	// windowWidth = $(window).width(),
	// windowHeight = $(window).height();
	// topSection.css({height: windowHeight / 2});
	// bottomSection.css({
	// 	height: windowHeight / 2,
	// 	position: "absolute",
	// 	bottom: "0px"
	// });

}
splitHalf();



// GO DOWN 1 PAGE

// goDown.click(function(){
goDown.on('click', function(e){
	e.preventDefault();
	$("html, body").animate({scrollTop: windowHeight}, 800);
});








})();
























