jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('.owl-carousel').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
                    dotsContainer: '.dot-navs',
                    dotsClass: '.dot-navs',
                    dotClass:'.dot',
		            responsive: {
		              0: {
		                items: 1
		              },
		              400: {
		                items: 2
		              },
                      700: {
                        items: 3
                      },
		              1170: {
		                items: 5
		              }
		            }
		        });
        	});