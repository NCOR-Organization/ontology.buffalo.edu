
// VERSION 3.011030 

var magnetSubMenus=new Object() 
magnetSubMenus.subMenuHideDelay=10000; // default
magnetSubMenus.centeredMainMenu=false; // default
magnetSubMenus.pageWidth=760; // default
magnetSubMenus.previousMenu=false;

// initiate browser object and basic parameters
var currentBrowser=new Object();
currentBrowser.an=navigator.appName.toLowerCase();
currentBrowser.bn=parseInt(navigator.appVersion.toLowerCase());
currentBrowser.ag=navigator.userAgent.toLowerCase();
currentBrowser.mz=currentBrowser.ag.indexOf('mozilla');
currentBrowser.mz=currentBrowser.ag.substring(currentBrowser.mz+8);
currentBrowser.mz=parseInt(currentBrowser.mz);

// determine platform 
currentBrowser.win=false,currentBrowser.mac=false,currentBrowser.lin=false;
if(currentBrowser.ag.indexOf('win')>-1) { currentBrowser.win=true }
else if(currentBrowser.ag.indexOf('mac')>-1) { currentBrowser.mac=true }
else if(currentBrowser.ag.indexOf('lin')>-1) { currentBrowser.lin=true }

// determine browsers
currentBrowser.ie=false,currentBrowser.nc=false,currentBrowser.op=false;
if(currentBrowser.an.indexOf('exp')>-1) { currentBrowser.ie=true }
else if (currentBrowser.an.indexOf('ets')>-1) { currentBrowser.nc=true }
else if (currentBrowser.an.indexOf('era')>-1) { currentBrowser.op=true }

// determine browser versions
currentBrowser.dom=false,currentBrowser.ie4=false,currentBrowser.nc4=false,currentBrowser.nc6=false;
if(currentBrowser.mz>=5||currentBrowser.bn>=5) { 
if(currentBrowser.nc) { currentBrowser.nc6=true }
else { currentBrowser.dom=true } }
else if(currentBrowser.ie) { currentBrowser.ie4=true,currentBrowser.dom=true }
else if(currentBrowser.nc) { currentBrowser.nc4=true }

function styleFeature(id) { 
return new dynamicStyles(document.getElementById(id)) }

function subMenuHideFunction() { 
for(i=0; i<magnetSubMenus.subMenusArray.length; i++) { 
element=document.getElementById(magnetSubMenus.subMenusArray[i]);
element.onmouseover=cancelHideSubMenu;
element.onmouseout=hideSubMenu } } 

function preloadSubMenuImages() { 
for(i=0;i<magnetSubMenus.imagesToPreload.length;i+=2) { 
eval("magnetSubMenus."+magnetSubMenus.imagesToPreload[i]+"=new Image()");
eval("magnetSubMenus."+magnetSubMenus.imagesToPreload[i]+".src='"+magnetSubMenus.imagesToPreload[i+1]+"'") } }

function swapSubMenuImages(menu,level) { 
if(document.images[menu+'image']) { 
eval("document.images['"+menu+"image'].src=magnetSubMenus."+menu+level+".src") } }

function showSubMenu(menu) { 
hideAllSubMenus();
swapSubMenuImages(menu,'lower');
cancelHideSubMenu();
magnetSubMenus.previousMenu=menu;
verity=verifyMenu(menu);
if(verity) {
styleFeature(menu).showObject(); } }

function verifyMenu(menu) { 
verity=false;
for(i=0;i<magnetSubMenus.subMenusArray.length;i++) {
if(magnetSubMenus.subMenusArray[i]==menu) { 
verity=true;
break } }
return verity }

function hideAllSubMenus() { 
if(magnetSubMenus.previousMenu) {
swapSubMenuImages(magnetSubMenus.previousMenu,'upper');
verity=verifyMenu(magnetSubMenus.previousMenu);
if(verity) {
styleFeature(magnetSubMenus.previousMenu).hideObject() } } }

function hideSubMenu() { 
magnetSubMenus.hideDelay=setTimeout('hideAllSubMenus()',magnetSubMenus.subMenuHideDelay) }

function cancelHideSubMenu() { 
cancelHideDelay() }

function XcancelHideSubMenu() { 
if(currentBrowser.nc4) { setTimeout('cancelHideDelay()',10) } 
else { cancelHideDelay() } }

function cancelHideDelay() { 
clearTimeout(magnetSubMenus.hideDelay);
magnetSubMenus.hideDelay=false }

function highlightSection(menu,level) { 
level=="lower"?sectionHighlightColor=magnetSubMenus.sectionHighlightColor:sectionHighlightColor=magnetSubMenus.subMenuColor;
styleFeature(menu).setBackgroundColor(sectionHighlightColor) }

function initiateSubMenuBackgrounds() { 
for(var i=0; i<magnetSubMenus.subMenusArray.length; i++) { 
styleFeature(magnetSubMenus.subMenusArray[i]).setBackgroundColor(magnetSubMenus.subMenuColor) } } 

function positionAdjustments() { 
lf=0,tp=0; 
if(magnetSubMenus.centeredMainMenu) { 
pageWidth=windowWidth();
lf=((pageWidth-magnetSubMenus.pageWidth)/2)-10,lf<10?lf=0:false;
currentBrowser.nc4?lf=Math.floor(lf)-7:lA=Math.floor(lf) } 
if(currentBrowser.ie&&currentBrowser.win) { null } 
else { 
if(currentBrowser.win) { OS="Win" } 
else if(currentBrowser.mac) { OS="Mac" }
if(currentBrowser.ie) { UC="IE" } 
//else if(currentBrowser.op) { UC="OP" } 
else if(currentBrowser.nc4) { UC="NC4" } 
else if(currentBrowser.nc6) { UC="NC6" }
lf+=eval("magnetSubMenus.left"+OS+UC);
tp+=eval("magnetSubMenus.top"+OS+UC); 
for(i=0; i<magnetSubMenus.subMenusArray.length; i++) { 
styleFeature(magnetSubMenus.subMenusArray[i]).moveBy(lf,tp) } } } 

function setupSubMenus() { 
initiateSubMenuBackgrounds();
positionAdjustments();
subMenuHideFunction(); }





