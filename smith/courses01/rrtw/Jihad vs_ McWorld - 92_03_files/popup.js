//<!--
// Code to display pop up window on exiting page

var ads;
var doPop;
var today;
var interval;

function init() {

// order of this array establishes precedence
// parameters are:
//    adurl, wheretoshow, probability, cookielength (interval), cookiename, width, height
	ads = new Array(new adobject("/popup.htm",  "", 100, 1209600, "subsoffer", 320, 320),
					new adobject("/test2.htm", "", 0, 1, "more", 100, 200));


//interval specifies number of seconds between any ads at all
	interval = 10;
					
	today = new Date();

}

function adobject(adurl, wheretoshow, probability, cookielength, cookiename, width, height) {
	this.adurl = adurl;
	this.wheretoshow = wheretoshow; //search for this substring in document location 
	this.probability = probability; //integer value up to 100
	this.cookielength = cookielength; //number of seconds till cookie expires
	this.cookiename = cookiename;
	this.width = width;
	this.height = height;
}

//cookie should track if ad was already seen
function cookieOkay(cookiename, cookielength) {
	var expdate = new Date(today.getTime() + cookielength * 1000); //+30 * 24 * 60 * 60 * 1000;
	if (document.cookie.indexOf(cookiename + "=") != -1) {
		return false;
	} 
	document.cookie = cookiename + "=1" + ";expires=" + expdate.toGMTString();
	return true;
}

//global cookie prevents any ads from being shown at all
function globalCookieOkay() {
	if (document.cookie.indexOf("popglobal=") != -1) {
		return false;
	}
	return true;
}

function globalCookieSet() {
	var expdate = new Date(today.getTime() + interval * 1000); //+30 * 24 * 60 * 60 * 1000; 
	document.cookie = "popglobal=1;expires=" + expdate.toGMTString();	
}


//checks for wheretoshow in url
function urlOkay(wheretoshow) {
	if (wheretoshow == "")
		return true;
	if (document.location.href.indexOf(wheretoshow) != -1)
		return true;
	return false;
}

//checks for valid probability
function probabilityOkay(probability) {
	var realProbability = probability;
	if ((is_nav4) && (is_win)) {
		realProbability = realProbability / 5;
	}
	if (today.getTime() % 100 < realProbability)
		return true;
	return false;
}

//this function does all the work
function popUp () {
	if ((is_nav) || (is_ie)) {
	if ((doPop == null) && globalCookieOkay()) {
		for (var i = 0; i < ads.length; i++) { //try all possible ads
			if (probabilityOkay(ads[i].probability) && urlOkay(ads[i].wheretoshow)) {
				if (cookieOkay(ads[i].cookiename, ads[i].cookielength)) {
					doPop = false; //so that if page does not reload, still don't get ads 2x
					globalCookieSet();
					window.open(ads[i].adurl, ads[i].cookiename, "height=" + ads[i].height + ",width=" + ads[i].width +",scrollbars=no,resizable=no");
					return; //so we show at most one ad
					}
				}
			}
		}	
	}	
}



//Code for IE4+
function dontPop (tagname) {
	if ((tagname == "A") || (tagname == "IMG"))  {
		doPop = false;
	}
}

//Code for Netscape
function windowHandleClick(evt)
{ 
if (evt.target != "") {
	routeEvent(evt);
	doPop = false;
	}
  return true;
}

if (is_nav4up) {
	window.captureEvents(Event.CLICK);
	window.onclick=windowHandleClick;
}

//-->
