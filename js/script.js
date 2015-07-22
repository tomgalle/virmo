

(function() {


// VARIABLES

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var topSection = $(".top_section");
var bottomSection = $(".bottom_section");
var section = $(".section");
var goDown = $(".godown");
var pageOne = $(".page_one");
var header = $('#header');
var lineBreak = $(".linebreak");
var mobileWith = 480;
var imgContainer = $(".page_two_img_container");

var ticking = false;
var latestScrollY = 0;

var page2PosTop = $(".page_two").position().top;
var page1Height = $(".page_one").height();
var page2Height = $(".page_two").height();

// SET PAGES

function setPages() {
	windowWidth = $(window).width(),
	windowHeight = $(window).height();
	// section.css({ "height": windowHeight, "width": windowWidth });
	page2PosTop = $(".page_two").position().top;
	page1Height = $(".page_one").height();
	page2Height = $(".page_two").height();

}

setPages();


// RESIZE

// $(window).resize(function(){
$(window).on('resize', function(){
	setPages();
	// splitHalf();
});

$(window).on('scroll', function(){
	onScroll();
})

function onScroll(){
	latestScrollY = window.scrollY;
	requestTick();
}

function requestTick(){
	if(!ticking){
		requestAnimationFrame(update);
		ticking = true;
	}
}

var jar = $('.jar');
var pill1 = $('.pill1');
var pill2 = $('.pill2');
var pill3 = $('.pill3');


function update(){

	ticking = false;

	var st = latestScrollY;

	var dy = page2PosTop - st;

	// header

	if(st>page1Height){
		if( !header.hasClass("small-header") ) header.addClass("small-header");

	}else{
		if( header.hasClass("small-header") ) header.removeClass("small-header");
	}


	// parallax




	if ( windowWidth > mobileWith ){
		if(st>0 && st<page1Height+page2Height){
			jar.css({
				'transform': 'translate3D(0,'+ -dy*0.2 +'px,0) rotate('+(-dy*0.010)+'deg)'
			})
			pill1.css({
				'transform': 'translate3D(0,'+ dy*1.2 +'px,0)'
			})

			pill2.css({
				'transform': 'translate3D(0,'+ dy*0.4 +'px,0)'
			})

			pill3.css({
				'transform': 'translate3D(0,'+ dy*0.1 +'px,0)'
			})

			// $(".pagetwo_title").css({
				// 'transform': 'translateY('+ -dy*0.4 +'px)'
			// })		
		}
	} 
	else {imgContainer.css({ display: "none"})};
}




// SPLIT PAGE 7

// function splitHalf(){
	// windowWidth = $(window).width(),
	// windowHeight = $(window).height();
	// topSection.css({height: windowHeight / 2});
	// bottomSection.css({
	// 	height: windowHeight / 2,
	// 	position: "absolute",
	// 	bottom: "0px"
	// });

// }
// splitHalf();



// GO DOWN 1 PAGE

// goDown.click(function(){
goDown.on('click', function(e){
	e.preventDefault();
	$("html, body").animate({scrollTop: windowHeight}, 800);
});




// if 

// var mybr = document.createElement('br');
// lineBreak.appendChild(mybr);



// lineBreak.document.write('<br/>');



})();
























