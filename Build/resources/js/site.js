$(function() {
	
	
	
	var $intro = $('section.intro');
	
	$('a.nav-trigger img').fixSVGStack();
	
	$('header').mouseenter(function() {
		$('.nav-trigger img').attr('src', 'resources/images/chevron-stack.svg#menu');
		$('a.nav-trigger img').fixSVGStack();
	}).mouseleave(function() {
		$('.nav-trigger img').attr('src', 'resources/images/chevron-stack.svg#logo');
		$('a.nav-trigger img').fixSVGStack();
	});
	
	var docHash = document.location.hash;
	
	if (docHash.length > 0 && docHash != '#!top') {
		//console.log('has a hash!');
		docHash = docHash.replace('!', '');
		setTimeout(function() {
			$(window).scrollTo(docHash, 1000, {easing: 'swing'});
		}, 1000);
	}
	
	$(window).hashchange(function() {
		var hash = document.location.hash.replace('!', ''),
			$target = $(hash),
			chevronColor = $target.data('chevron-color'),
			chevronBackground = $target.data('chevron-background'),
			$chevron = $('header').find('a.nav-trigger'),
			$chevronImg = $chevron.find('img'),
			chevronImgSrc = $chevronImg.attr('src');
		
		$chevron.css('background-color', chevronBackground);
		//console.log('old src: ' + chevronImgSrc);
		chevronImgSrc = chevronImgSrc.replace(/fill%3D%22(\w+|#\w{3,6}|\w{3,4}\([0-9.]+(,[0-9.]+)*\))%22/g, 'fill%3D%22'+chevronColor+'%22');
		$chevronImg.attr('src', chevronImgSrc);
		//console.log('new src: ' + chevronImgSrc);
	});
	$(window).hashchange();
	
	$(window).scroll(function () {
	  var inview = $('#content > section:in-viewport:first').attr('id');
	  document.location.hash = "!"+inview;
	});
});
