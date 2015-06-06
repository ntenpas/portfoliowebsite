var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('nav');
var html = document.getElementById('html');
var baseFontSize = window.getComputedStyle(html, null)['font-size'];
var remSize = parseFloat(baseFontSize);

var checkSmallScreen = function() {
	if (nav.clientHeight == Math.round(2*remSize)) {
		nav.style.visibility = 'hidden';
		hamburger.style.display = 'block';
	}
}
var checkLargeScreen = function() {
	if (nav.clientHeight == Math.round(4*remSize)) {
		nav.style.visibility = 'visible';
		hamburger.style.display = 'none';
	}
}

// if the screen is loaded small, nav below banner
checkSmallScreen();

// account for window resizing
window.addEventListener('resize', function(event) {
	checkSmallScreen();
	checkLargeScreen();
});

// on hamburger menu click, display nav
hamburger.addEventListener('click', function(event) {
	
	// if the nav is hidden, show it
	if (nav.style.visibility == 'hidden') {
		nav.style.visibility = 'visible';
	}

	// if the nav is shown, hide it
	else if (nav.style.visibility == 'visible') {
		nav.style.visibility = 'hidden';
	}
});