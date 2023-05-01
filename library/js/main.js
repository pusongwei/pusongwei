var containerBricks = $('.bricks-wrapper');
containerBricks.imagesLoaded( function() {
	containerBricks.masonry({		  
	  	itemSelector: '.entry',
	  	columnWidth: '.grid-sizer',
		percentPosition: true,
	  	resize: true
	});
}).always( function( instance ) {
    $('.pic-list').css('opacity', 1);
})