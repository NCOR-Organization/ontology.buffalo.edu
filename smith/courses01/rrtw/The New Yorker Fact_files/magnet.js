// VERSION 2.0 //

var myBrowser=new Object();

myBrowser.pl=navigator.platform.toLowerCase(); 
navigator.language?myBrowser.lg=navigator.language.toLowerCase():myBrowser.lg=false; 
myBrowser.ag=navigator.userAgent.toLowerCase(); 
myBrowser.mz=myBrowser.ag.substring(8,11); 
myBrowser.ag.indexOf('win')>-1?myBrowser.win=true:myBrowser.win=false;
myBrowser.ag.indexOf('mac')>-1?myBrowser.mac=true:myBrowser.mac=false;
myBrowser.ag.indexOf('aol')>-1?myBrowser.aol=true:myBrowser.aol=false;
myBrowser.vn=navigator.appVersion.toLowerCase();
myBrowser.bn=parseInt(myBrowser.vn); 
myBrowser.bn>=5?myBrowser.dom=true:myBrowser.dom=false; 
myBrowser.an=navigator.appName.toLowerCase(); 
myBrowser.an.indexOf('exp')>-1?myBrowser.ie=true:myBrowser.ie=false; 
myBrowser.an.indexOf('ets')>-1?myBrowser.nc=true:myBrowser.nc=false;
myBrowser.an.indexOf('per')>-1?myBrowser.op=true:myBrowser.op=false;
if(myBrowser.bn<5) { myBrowser.ie?myBrowser.dom=true:myBrowser.dom=false; 
myBrowser.ie?myBrowser.ie4=true:myBrowser.ie4=false; 
myBrowser.ie&&myBrowser.ag.indexOf('msie 5')>-1?myBrowser.ie5=true:myBrowser.ie5=false; 
myBrowser.ie&&myBrowser.ag.indexOf('msie 5')>-1?myBrowser.ie4=false:false; 
myBrowser.nc?myBrowser.nc4=true:myBrowser.nc4=false; 
myBrowser.op?myBrowser.op4=true:myBrowser.op4=false }
else { myBrowser.nc?myBrowser.nc6=true:myBrowser.nc6=false;
myBrowser.ie?myBrowser.ie5=true:myBrowser.ie5=false;
myBrowser.op?myBrowser.op5=true:myBrowser.op5=false }

// initiate standard object used across all magnet sites
var myObject=new Object();

// get referrer for popped windows and title of referrer for popped windows 
window.opener?myObject.popReferrer=window.opener.location:myObject.popReferrer=null;
window.opener?myObject.popReferrerTitle=window.opener.document.title:myObject.popReferrerTitle='';

// fool-proof popWindow function 
function popWindow(hf,nm,op) { 
if(op) { poppedWindow=window.open(hf,nm,op) }
else if(nm) { poppedWindow=window.open(hf,nm) }
else { poppedWindow=window.open(hf,"poppedWindow") }
poppedWindow.focus() }

// function for loading documents from option fields
function loadSelected(hf) { 
location=hf.options[hf.selectedIndex].value }

// function for opening documents from option fields
function openSelected(hf,nm,op) { 
hf=hf.options[hf.selectedIndex].value;
if(op) { poppedWindow=window.open(hf,nm,op) }
else if(nm) { poppedWindow=window.open(hf,nm) }
else { poppedWindow=window.open(hf,"poppedWindow") }
hf.selectedIndex=null; 
poppedWindow.focus() } 

// preloads images from myObject.imagesToPreload array 
// e.g., myObject.imagesToPreload=new Array('name','image.gif');
function preloadImages() { 
for(i=0;i<myObject.imagesToPreload.length-1;i+=2) { 
eval("myObject.image"+myObject.imagesToPreload[i]+"=new Image()");
eval("myObject.image"+myObject.imagesToPreload[i]+".src='"+myObject.imagesToPreload[i+1]+"'") } }

// swaps images preloaded from myObject.imagesToPreload array 
// argument1 is name of image and argument2 is name of preloaded image 
function swapPreloadedImages() { 
for(i=0;i<arguments.length;i+=2) {
eval("document.images['"+arguments[i]+"'].src=myObject.image"+arguments[i+1]+".src") } } 

// reload function for netscape 4 bug 
function netscapeReload(action) { 
if(myBrowser.nc4) { 
if(action==false) { 
myObject.initialWidth=window.innerWidth; 
myObject.initialHeight=window.innerHeight; 
window.onresize=netscapeReload } 
else { 
if(window.innerWidth!=myObject.initialWidth) { location.reload() }
else if(window.innerHeight!=myObject.initialHeight) { location.reload() } } } }

netscapeReload(false);
  