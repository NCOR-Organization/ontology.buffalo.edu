
var mySubMenus=new Object() 
mySubMenus.subMenuHideDelay=700; // default
mySubMenus.centeredMainMenu=false; // default
mySubMenus.pageWidth=760; // default
mySubMenus.previousMenu=false;

//dynamicBrowser.ag.indexOf('mac')>-1?dynamicBrowser.mac=true:dynamicBrowser.mac=false;

function styleFeature(id) { 
return new dynamicStyles(document.getElementById(id)) }

function subMenuHideFunction() { 
for(i=0; i<mySubMenus.subMenusArray.length; i++) { 
element=document.getElementById(mySubMenus.subMenusArray[i]);
element.onmouseover=cancelHideSubMenu;
element.onmouseout=hideSubMenu } } 

function preloadSubMenuImages() { 
for(i=0;i<mySubMenus.imagesToPreload.length;i+=2) { 
eval("mySubMenus."+mySubMenus.imagesToPreload[i]+"=new Image()");
eval("mySubMenus."+mySubMenus.imagesToPreload[i]+".src='"+mySubMenus.imagesToPreload[i+1]+"'") } }

function swapSubMenuImages(menu,level) { 
if(document.images[menu+'image']) { 
eval("document.images['"+menu+"image'].src=mySubMenus."+menu+level+".src") } }

function showSubMenu(menu) { 
hideAllSubMenus();
swapSubMenuImages(menu,'lower');
cancelHideSubMenu();
mySubMenus.previousMenu=menu;
verity=verifyMenu(menu);
if(verity) {
styleFeature(menu).showObject(); } }

function verifyMenu(menu) { 
verity=false;
for(i=0;i<mySubMenus.subMenusArray.length;i++) {
if(mySubMenus.subMenusArray[i]==menu) { 
verity=true;
break } }
return verity }

function hideAllSubMenus() { 
if(mySubMenus.previousMenu) {
swapSubMenuImages(mySubMenus.previousMenu,'upper');
verity=verifyMenu(mySubMenus.previousMenu);
if(verity) {
styleFeature(mySubMenus.previousMenu).hideObject() } } }

function hideSubMenu() { 
mySubMenus.hideDelay=setTimeout('hideAllSubMenus()',mySubMenus.subMenuHideDelay) }

function cancelHideSubMenu() { 
if(myBrowser.nc4) { setTimeout('cancelHideDelay()',10) } 
else { cancelHideDelay() } }

function cancelHideDelay() { 
clearTimeout(mySubMenus.hideDelay);
mySubMenus.hideDelay=false }

function highlightSection(menu,level) { 
level=="lower"?sectionHighlightColor=mySubMenus.sectionHighlightColor:sectionHighlightColor=mySubMenus.subMenuColor;
styleFeature(menu).setBackgroundColor(sectionHighlightColor) }

function initiateSubMenuBackgrounds() { 
for(var i=0; i<mySubMenus.subMenusArray.length; i++) { 
styleFeature(mySubMenus.subMenusArray[i]).setBackgroundColor(mySubMenus.subMenuColor) } } 

function positionAdjustments() { 

leftWinNC4=0,topWinNC4=0;
//leftWinOP=-3,topWinOP=-8;
leftWinNC6=-3,topWinNC6=-8;
leftMacNC4=0,topMacNC4=0;
leftMacNC6=0,topMacNC6=0;
leftMacIE=-1,topMacIE=-1; 

lf=0,tp=0; 

if(mySubMenus.centeredMainMenu) { 
pageWidth=windowWidth();
lf=((pageWidth-mySubMenus.pageWidth)/2)-10,lf<10?lf=0:false;
myBrowser.nc4?lf=Math.floor(lf)-7:lA=Math.floor(lf) } 

if(myBrowser.ie&&myBrowser.win) { null } 
else { 
if(myBrowser.win) { OS="Win" } 
else if(myBrowser.mac) { OS="Mac" }
if(myBrowser.ie) { UC="IE" } 
//else if(myBrowser.op) { UC="OP" } 
else if(myBrowser.nc4) { UC="NC4" } 
else if(myBrowser.nc6) { UC="NC6" }
lf+=eval("left"+OS+UC);
tp+=eval("top"+OS+UC); 

for(i=0; i<mySubMenus.subMenusArray.length; i++) { 
styleFeature(mySubMenus.subMenusArray[i]).moveBy(lf,tp) } } } 

function setupSubMenus() { 
initiateSubMenuBackgrounds();
positionAdjustments();
subMenuHideFunction() }



