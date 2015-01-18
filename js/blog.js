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

// google analytics
(function () {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', '{{ site.google_analytics_id }}', 'auto');
	ga('send', 'pageview');
})();
