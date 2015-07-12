

(function() {


// BASIC VARS

var $windowWidth = $(window).width(),
$windowHeight = $(window).height(),
$document = $(document),
$window = $(window);


// SET PAGES


var $section = $(".section");

function setPages() {
	$windowWidth = $(window).width(),
	$windowHeight = $(window).height();
	$section.css({ "height": $windowHeight, "width": $windowWidth });
}
setPages();


// RESIZE

$window.resize(function(){
setPages();
});











})();
























