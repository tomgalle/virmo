

(function() {


// VARIABLES

var $windowWidth = $(window).width(),
$windowHeight = $(window).height(),
$document = $(document),
$window = $(window),
$topSection = $(".top_section"),
$bottomSection = $(".bottom_section"),
$section = $(".section"),
$goDown = $(".godown"),
$pageOne = $(".page_one");



// SET PAGES

function setPages() {
	$windowWidth = $(window).width(),
	$windowHeight = $(window).height();
	$section.css({ "height": $windowHeight, "width": $windowWidth });
}
setPages();


// RESIZE

$(window).resize(function(){
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
	var $windowWidth = $(window).width(),
	$windowHeight = $(window).height();
	$topSection.css({height: $windowHeight / 2});
	$bottomSection.css({
		height: $windowHeight / 2,
	// 	position: "absolute",
	// 	bottom: "0px"
	});

}
splitHalf();



// GO DOWN 1 PAGE

function scrollDown(){
	$windowWidth = $(window).width(),
	$windowHeight = $(window).height();
	$goDown.click(function(){
		$("html, body").animate({scrollTop: $windowHeight}, 400);
	});



}








})();
























