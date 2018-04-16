(function ($) {
	"use strict"; // Start of use strict

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

})(jQuery); // End of use strict

// Google Maps Scripts
const API_KEY = 'AIzaSyAv3PF_MyNqBG7VG93yNxhopyImDr9JWR4';

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
