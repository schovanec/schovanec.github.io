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

{% if site.disqus_shortname %}
	// disqus configuration
	window.disqus_shortname = '{{ site.disqus_shortname }}';

	//
	// load comment counts if required (only if it is not disabled by
	// data- attribute on body)
	//
	$('body:not([data-no-comment-counts])').each(function () {
		if (disqus_shortname) {
			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function () {
				var s = document.createElement('script'); s.async = true;
				s.type = 'text/javascript';
				s.src = '//' + disqus_shortname + '.disqus.com/count.js';
				(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
			}());
		}
	});

	//
	// load disqus comment thread if it is present on the page
	//
	$('#disqus_thread').each(function () {
		var $this = $(this);

		/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		window.disqus_identifier = $this.data('post-id');
		window.disqus_title = $this.data('post-title');
		//var disqus_url = '';

		if (disqus_shortname && disqus_identifier) {
			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		}
	});
{% endif %}

});
