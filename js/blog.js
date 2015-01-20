$(function ($) {

	$('.post-content > img[title], .post-content :not(figure) > img[title]')
		.wrap('<figure class="post-img">')
		.each(function () {
			var title = $(this).attr('title');
			$('<figcaption>')
				.text(title)
				.insertAfter(this);
		});

});