windoids = new Array();

function windoid (url, name, width, height, props, autoClose) {
	var winProps;
	
	// If the props argument isn't specified, make the window resizable and scrollable
	if (props == null)
		winProps = 'resizable=1,scrollbars=1';
	else
		winProps = props;
	
	if (width != null && width != '') {
		// Try not to open a window wider than the screen
		if (window.screen && width > window.screen.availWidth)
			winProps += ',outerWidth=' + window.screen.availWidth;
		else
			winProps += ',width=' + width;
	}
	
	if (height != null && height != '') {
		// Try not to open a window taller than the screen
		if (window.screen && width > window.screen.availHeight)
			winProps += ',outerHeight=' + window.screen.availHeight;
		else
			winProps += ',height=' + height;
	}
	
	if (winProps.charAt(0) == ',')
		winProps = winProps.substring(1);

	var winName;

	if (name == null || name == '')
		winName = '_blank';
	else
		winName = name;
	
	var win = window.open(url, winName, winProps);
	if (win.focus && winName != '_blank') {
		// Bug in AOL 5.0 causes javascript error when
		// window.focus() is called before the page loads.
		if (navigator.appVersion.indexOf('AOL') < 0) {
			win.focus();
		}
	}
	
	if (autoClose == true) {
		var addedToList = false;
		for (var i=0; i<windoids.length; i++) {
			if (windoids[i].closed) {
				windoids[i] = win;
			}
		}
		
		if (!addedToList) {
			windoids[windoids.length++] = win;
		}
	}
}


function closeWindoids () {
	for (var i=0; i<windoids.length; i++) {
		var win = windoids[i];
		if (!win.closed) {
			win.close();
		}
	}
}


function loadParent (url) {
	if (window.top.opener && !window.top.opener.closed) {
		var win = window.top.opener;
		win.location = url;
		if (win.focus) {
			win.focus();
		}
	} else {
		window.open(url, '_blank', '');	
	}
}


window.onunload = closeWindoids;
