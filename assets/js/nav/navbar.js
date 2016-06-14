jQuery(document).ready(function($) {
	'use strict';
/* ==================================================
				navbar
================================================== */
function navbar(){
	'use strict';
    jQuery('.nav').onePageNav({
       	filter: ':not(.external)',
       	scrollThreshold: 0.25,
       	scrollOffset: 80,
		easing: 'easeInOutExpo'
    });
}

	navbar();
});