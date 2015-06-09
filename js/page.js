var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('nav');
var blogTab = document.getElementById('blogTab');
var resumeTab = document.getElementById('resumeTab');
var aboutTab = document.getElementById('aboutTab');
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
	if (window.innerWidth >= window.innerHeight) {
		nav.style.visibility = 'visible';
		hamburger.style.display = 'none';
	}
	if (nav.clientHeight == Math.round(4*remSize)) {
		nav.style.visibility = 'visible';
		hamburger.style.display = 'none';
	}
}
var getContent = function(event, pageName) {
	event.preventDefault();

	// get content of blog page, and display it
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var newContent = xhr.responseXML.getElementById('content');
			var page = document.getElementById('page');

			// remove old content
			while (page.firstChild) {
				page.removeChild(page.firstChild);
			}

			// append the new content
			page.appendChild(newContent);
		}
	}
	xhr.open('GET', '../' + pageName + '.html');
	xhr.responseType = 'document';
	xhr.send();
}

// if the screen is loaded small, nav below banner
checkSmallScreen();

// account for window resizing
window.addEventListener('resize', function(event) {
	checkLargeScreen();
	checkSmallScreen();
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

// asynchronous page loads
/*
blogTab.addEventListener('click', function(event) {
	getContent(event, 'index');
});
resumeTab.addEventListener('click', function(event) {
	getContent(event, 'resume');
});
aboutTab.addEventListener('click', function(event) {
	getContent(event, 'about');
});
*/