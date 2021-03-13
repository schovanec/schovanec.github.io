---
# front matter is included so that this file will be processed by Jekyll
---
$(function ($) {

	// add captions to photos
	$('.post-content > img[alt], .post-content :not(figure) > img[alt]')
		.wrap('<figure class="post-img">')
		.each(function () {
			var title = $(this).attr('alt');
			$('<figcaption>')
				.text(title)
				.insertAfter(this);
		});

});