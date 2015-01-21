$(function ($) {

	$('.post-content > img[alt], .post-content :not(figure) > img[alt]')
		.wrap('<figure class="post-img">')
		.each(function () {
			var title = $(this).attr('alt');
			$('<figcaption>')
				.text(title)
				.insertAfter(this);
		});

});