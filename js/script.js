(function ($) {
	"use strict";
	// Preserve the original jQuery "swing" easing as "jswing"
	$.easing.jswing = $.easing.swing;

	var pow = Math.pow,
		sqrt = Math.sqrt,
		sin = Math.sin,
		cos = Math.cos,
		PI = Math.PI,
		c1 = 1.70158,
		c2 = c1 * 1.525,
		c3 = c1 + 1,
		c4 = (2 * PI) / 3,
		c5 = (2 * PI) / 4.5;

	// x is the fraction of animation progress, in the range 0..1
	function bounceOut(x) {
		var n1 = 7.5625,
			d1 = 2.75;
		if (x < 1 / d1) {
			return n1 * x * x;
		} else if (x < 2 / d1) {
			return n1 * (x -= (1.5 / d1)) * x + 0.75;
		} else if (x < 2.5 / d1) {
			return n1 * (x -= (2.25 / d1)) * x + 0.9375;
		} else {
			return n1 * (x -= (2.625 / d1)) * x + 0.984375;
		}
	}

	$.extend($.easing,
		{
			def: 'easeOutQuad',
			swing: function (x) {
				return $.easing[$.easing.def](x);
			},
			easeInQuad: function (x) {
				return x * x;
			},
			easeOutQuad: function (x) {
				return 1 - (1 - x) * (1 - x);
			},
			easeInOutQuad: function (x) {
				return x < 0.5 ?
					2 * x * x :
					1 - pow(-2 * x + 2, 2) / 2;
			},
			easeInCubic: function (x) {
				return x * x * x;
			},
			easeOutCubic: function (x) {
				return 1 - pow(1 - x, 3);
			},
			easeInOutCubic: function (x) {
				return x < 0.5 ?
					4 * x * x * x :
					1 - pow(-2 * x + 2, 3) / 2;
			},
			easeInQuart: function (x) {
				return x * x * x * x;
			},
			easeOutQuart: function (x) {
				return 1 - pow(1 - x, 4);
			},
			easeInOutQuart: function (x) {
				return x < 0.5 ?
					8 * x * x * x * x :
					1 - pow(-2 * x + 2, 4) / 2;
			},
			easeInQuint: function (x) {
				return x * x * x * x * x;
			},
			easeOutQuint: function (x) {
				return 1 - pow(1 - x, 5);
			},
			easeInOutQuint: function (x) {
				return x < 0.5 ?
					16 * x * x * x * x * x :
					1 - pow(-2 * x + 2, 5) / 2;
			},
			easeInSine: function (x) {
				return 1 - cos(x * PI / 2);
			},
			easeOutSine: function (x) {
				return sin(x * PI / 2);
			},
			easeInOutSine: function (x) {
				return -(cos(PI * x) - 1) / 2;
			},
			easeInExpo: function (x) {
				return x === 0 ? 0 : pow(2, 10 * x - 10);
			},
			easeOutExpo: function (x) {
				return x === 1 ? 1 : 1 - pow(2, -10 * x);
			},
			easeInOutExpo: function (x) {
				return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
					pow(2, 20 * x - 10) / 2 :
					(2 - pow(2, -20 * x + 10)) / 2;
			},
			easeInCirc: function (x) {
				return 1 - sqrt(1 - pow(x, 2));
			},
			easeOutCirc: function (x) {
				return sqrt(1 - pow(x - 1, 2));
			},
			easeInOutCirc: function (x) {
				return x < 0.5 ?
					(1 - sqrt(1 - pow(2 * x, 2))) / 2 :
					(sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
			},
			easeInElastic: function (x) {
				return x === 0 ? 0 : x === 1 ? 1 :
					-pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
			},
			easeOutElastic: function (x) {
				return x === 0 ? 0 : x === 1 ? 1 :
					pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
			},
			easeInOutElastic: function (x) {
				return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
					-(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 :
					pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
			},
			easeInBack: function (x) {
				return c3 * x * x * x - c1 * x * x;
			},
			easeOutBack: function (x) {
				return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
			},
			easeInOutBack: function (x) {
				return x < 0.5 ?
					(pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 :
					(pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
			},
			easeInBounce: function (x) {
				return 1 - bounceOut(1 - x);
			},
			easeOutBounce: bounceOut,
			easeInOutBounce: function (x) {
				return x < 0.5 ?
					(1 - bounceOut(1 - 2 * x)) / 2 :
					(1 + bounceOut(2 * x - 1)) / 2;
			}
		});

	/*==================================================================
[ Focus Contact2 ]*/
	$('.input2').each(function () {
		$(this).on('blur', function () {
			if ($(this).val().trim() != "") {
				$(this).addClass('has-val');
			}
			else {
				$(this).removeClass('has-val');
			}
		})
	})



    /*==================================================================
    [ Validate ]*/
	var name = $('.validate-input input[name="name"]');
	var email = $('.validate-input input[name="email"]');
	var message = $('.validate-input textarea[name="message"]');


	$('.validate-form').on('submit', function (e) {
		var check = true;
		e.preventDefault();
		var postdata = $('.validate-form').serialize();

		if ($(name).val().trim() == '') {
			showValidate(name);
			check = false;
		}


		if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
			showValidate(email);
			check = false;
		}

		if ($(message).val().trim() == '') {
			showValidate(message);
			check = false;
		}

		if (check) {
			$.ajax({
				type: 'POST',
				url: 'php/contact.php',
				data: postdata,
				dataType: 'json',
				success: function (result) {

					if (result.isSuccess) {
						var insert = $("<p class='thank-you'>Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.</p>");
						$(".validate-form").append(insert);
						setTimeout(function () {
							insert.empty();
						}, 6000);
						$(".validate-form")[0].reset();
						// location.reload();
					}
				},
				error: function () {
					var insert = $("<p class='thank-you'>Désolé, une erreur s'est produite... Veuillez réessayer dans quelques minutes.</p>");
					$(".validate-form").append(insert);
					setTimeout(function () { insert.empty(); }, 10000);
					$(".validate-form")[0].reset();
				}
			});
		}

		// return check;
	});


	$('.validate-form .input2').each(function () {
		$(this).focus(function () {
			hideValidate(this);
		});
	});

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 48)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 54
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	$('.carousel').carousel();

});

baguetteBox.run('.tz-gallery');

function loadImages() {
	var imgs = document.getElementsByTagName('img');
	for (var i = 0; i < imgs.length; i++) {
		if (imgs[i].getAttribute('data-src')) {
			imgs[i].setAttribute('src', imgs[i].getAttribute('data-src'));
		}
	}
}

if (window.addEventListener) { window.addEventListener("load", loadImages, false); }
else if (window.attachEvent) { window.attachEvent("onload", loadImages); }


function initMap() {
	var uluru = new google.maps.LatLng(43.391307, 3.674923);
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
	var coordInfoWindow = new google.maps.InfoWindow();
	coordInfoWindow.setContent(createInfoWindowContent(uluru, map.getZoom()));
	coordInfoWindow.setPosition(uluru);
	coordInfoWindow.open(map);

	map.addListener('zoom_changed', function () {
		coordInfoWindow.setContent(createInfoWindowContent(uluru, map.getZoom()));
		coordInfoWindow.open(map);
	});

	// var TILE_SIZE = 256;

	function createInfoWindowContent(latLng, zoom) {
		var scale = 1 << zoom;

		return [
			'4 rue Paul Baudassé, 34200 Sète - France',
			'Lat - Lng: ' + latLng,
			'Zoom: ' + zoom,
		].join('<br>');
	};
}
