

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
	var header = $('#header');

	var st = $(window).scrollTop();
	if(st>$(window).height()){
		if( !header.hasClass("small-header") ) header.addClass("small-header");

	}else{
		if( header.hasClass("small-header") ) header.removeClass("small-header");

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
	$("html, body").animate({scrollTop: windowHeight}, 400);
});








})();
























