
// VERSION 3.011112 //

// sub-menu objects and array 
var magnetSubMenus = new Object(); 
magnetSubMenus.subMenusArray=new Array('issue','goingson','critics','cartoons');
//magnetSubMenus.pageWidth=760,magnetSubMenus.centeredMainMenu=true; 
magnetSubMenus.subMenuHideDelay=10000;
//magnetSubMenus.sectionHighlightColor="ffffff";
magnetSubMenus.subMenuColor="ffffff";
magnetSubMenus.leftWinNC4=0,magnetSubMenus.topWinNC4=0;
//magnetSubMenus.leftWinOP=-3,magnetSubMenus.topWinOP=-8;
magnetSubMenus.leftWinNC6=-3,magnetSubMenus.topWinNC6=-8;
magnetSubMenus.leftMacNC4=0,magnetSubMenus.topMacNC4=0;
magnetSubMenus.leftMacNC6=0,magnetSubMenus.topMacNC6=0;
magnetSubMenus.leftMacIE=-1,magnetSubMenus.topMacIE=-1; 

magnetSubMenus.imagesToPreload = new Array(

	"issueupper","/images/menus/me_issueupper.gif",
	"goingsonupper","/images/menus/me_goingsonupper.gif",
	"talkupper","/images/menus/me_talkupper.gif",
	"criticsupper","/images/menus/me_criticsupper.gif",
	"shoutsupper","/images/menus/me_shoutsupper.gif",
	"factupper","/images/menus/me_factupper.gif",
	"fictionupper","/images/menus/me_fictionupper.gif",
	"cartoonsupper","/images/menus/me_cartoonsupper.gif",
	"onlineupper","/images/menus/me_onlineupper.gif",
	"archivesupper","/images/menus/me_archivesupper.gif",

	"issuelower","/images/menus/me_issuelower.gif",
	"goingsonlower","/images/menus/me_goingsonlower.gif",
	"talklower","/images/menus/me_talklower.gif",
	"criticslower","/images/menus/me_criticslower.gif",
	"shoutslower","/images/menus/me_shoutslower.gif",
	"factlower","/images/menus/me_factlower.gif",
	"fictionlower","/images/menus/me_fictionlower.gif",
	"cartoonslower","/images/menus/me_cartoonslower.gif",
	"onlinelower","/images/menus/me_onlinelower.gif",
	"archiveslower","/images/menus/me_archiveslower.gif"
	
	); // end of array 

// change header spot based on section and subsection 
function changeHeaderSpot(spot) { 
netscapeBrowser = false, netscapeBrowser4 = false; 
browserNumber = parseInt(navigator.appVersion.toLowerCase())
browserType = navigator.appName.toLowerCase();
if(browserType.indexOf('ets') > -1) { netscapeBrowser = true }
if(browserNumber < 5 && netscapeBrowser) { false }
else { document.images['headerspot'].src = spot; } } 

// menu object load page function 
function loadPage(href) { window.location = href }

// initiate standard objects used across all magnet sites
var myObject = new Object();
var menuObject = new Object(); 

// get referrer for popped windows and title of referrer for popped windows 
myObject.popReferrer = '', myObject.popReferrerTitle = ''; 
if(window.opener) { 
if(typeof window.opener.name == "string") {  
myObject.popReferrer = window.opener.location.toString(); 
myObject.popReferrerTitle = window.opener.document.title } } // end 

// fool-proof popWindow function 
function popWindow(hf,nm,op) { 
if(op) { poppedWindow = window.open(hf,nm,op) }
else if(nm) { poppedWindow = window.open(hf,nm) }
else { poppedWindow = window.open(hf,"poppedWindow") }
poppedWindow.focus() }

// function for opening documents from option fields
function openSelected(hf,nm,op) { 
hf = hf.options[hf.selectedIndex].value;
if(op) { poppedWindow = window.open(hf,nm,op) }
else if(nm) { poppedWindow = window.open(hf,nm) }
else { poppedWindow = window.open(hf,"poppedWindow") }
hf.selectedIndex = null; 
poppedWindow.focus() } 
  