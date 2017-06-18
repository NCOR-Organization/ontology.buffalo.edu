//
// This file contains all the javascript functions used
// for the ET Core site. It is included in the
// main.jhtml file and contains functions for JavaScript 1.1
//
function newOpinionPopupWindow(url) {
 	newWin = window.open(url,'nOpWin','height=472,width=305,scrollbars,resizable')
 	newWin.focus()
}
function newPopupWindow(url) {
	newWin = window.open(url,'nWin','height=450,width=305,scrollbars,resizable')
	newWin.focus()
}
function newFullPopupWindow(url) {
	newWin = window.open(url,'nPWin','width=740,height=600,scrollbars,resizable,menubar,status,toolbar,location')
	newWin.focus()
}
function newExPopupWindow(url) {
	newWin = window.open(url,'nExWin','height=550,width=328,scrollbars,resizable')
	newWin.focus()
}
function newUpdatesPopupWindow(url) {
	newWin = window.open(url,'UpdatesPopup','height=573,width=408,scrollbars,resizable')
	newWin.focus()
}
function newSlidesPopupWindow(url) {
	newWin = window.open(url,'SlidesPopup','height=608,width=397,scrollbars,resizable')
	newWin.focus()
}
function MattWindow(sURL) {
	newWin = window.open(sURL,'matt','scrollbars,resizable,width=392,height=580')
	newWin.focus()
}
function AlexWindow(sURL) {
	newWin = window.open(sURL,'alex','scrollbars,resizable,width=820,height=505')
	newWin.focus()
}
function criticChoicePopupWindow(url) {
	newWin = window.open(url,'Critics Choice','height=573,width=408,scrollbars,resizable')
	newWin.focus()
}

// popup print window functn moved from ToolbarFrag.html - NJ,090701
function newPopupPrintWindow(url) {
	newWin = window.open(url,'nWin','height=600,width=600,scrollbars,resizable,toolbar,menubar')
	newWin.focus()
}

// swap fnctn moved from core.js - NJ,090701
function swap(imageObj, imageName) {
	if (document.images) eval("document." + imageObj + ".src = '/core/images/" + imageName + ".gif'");
}

// links for the Glass website (motoring)
// required for links from site index.
function openUsedCars(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.location.href=URL;
}
function openNewCars(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass_new_cars.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.location.href=URL;
}
function openValuations(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.open(URL, 'uvvWindow', 'scrollbars,status,width=484,height=580,screenX=200,screenY=20');
  window.location.href='http://motoring.telegraph.co.uk/motoring/index.jhtml';
}

function encodeurl(url) {

	var encodedurl = url;

	var i = url.indexOf('.jhtml');
	if (i != -1 &&
			(url.indexOf('$sessionid$') == -1) &&
			(url.indexOf('mailto:') == -1) &&
			sessionidstring != '') {
		encodedurl = url.substring(0,i+6);
		encodedurl += sessionidstring;
		encodedurl += url.substring(i+6);
	}
	return encodedurl;
}

function newWindow(url, name, features) {
	var newWin = window.open(encodeurl(url),name,features);
	newWin.focus();
}
