
// VERSION 3.011030

// initiate browser object and basic parameters
var dynamicBrowser=new Object();
dynamicBrowser.an=navigator.appName.toLowerCase();
dynamicBrowser.bn=parseInt(navigator.appVersion.toLowerCase());
dynamicBrowser.ag=navigator.userAgent.toLowerCase();
dynamicBrowser.mz=dynamicBrowser.ag.indexOf('mozilla');
dynamicBrowser.mz=dynamicBrowser.ag.substring(dynamicBrowser.mz+8);
dynamicBrowser.mz=parseInt(dynamicBrowser.mz);

// determine browsers
dynamicBrowser.ie=false,dynamicBrowser.nc=false;
if(dynamicBrowser.an.indexOf('exp')>-1) { dynamicBrowser.ie=true }
else if (dynamicBrowser.an.indexOf('ets')>-1) { dynamicBrowser.nc=true }

// determine browser versions
dynamicBrowser.dom=false,dynamicBrowser.ie4=false,dynamicBrowser.nc4=false;
if(dynamicBrowser.mz>=5||dynamicBrowser.bn>=5) { dynamicBrowser.dom=true }
else if(dynamicBrowser.ie) { dynamicBrowser.ie4=true,dynamicBrowser.dom=true }
else if(dynamicBrowser.nc) { dynamicBrowser.nc4=true }

// get window width parameter
function windowWidth() { 
if(dynamicBrowser.ie4||dynamicBrowser.ie5) { 
return width=document.body.clientWidth }  
return width=window.innerWidth }

// get window height parameter
function windowHeight() { 
if(dynamicBrowser.ie4||dynamicBrowser.ie5) { 
return height=document.body.clientHeight } 
return height=window.innerHeight } 

// basic dynamic function 
function dynamicStyles(object) { 
(dynamicBrowser.dom)?this.element=object.style:false; 
(dynamicBrowser.nc4)?this.element=object:false;
this.object=object }

// define prototypes 
dynamicStyles.prototype.element=null,dynamicStyles.prototype.object=null;

// get layer information for nc4
function getLayer(container,id) { 
for(var i=0; i<container.layers.length; ++i) { 
if(container.layers[i].id&&id==container.layers[i].id) { 
return container.layers[i] } 
subLayer=container.layers[i].document;
object=getLayer(subLayer,id); 
if(object!=null) { 
return object } } 
return null }

// define element by id functions for ie4/5 and nc4
(dynamicBrowser.ie4||dynamicBrowser.ie5)?document.getElementById=new Function("id","return document.all[id]"):false;
(dynamicBrowser.nc4)?document.getElementById=getLayerById:false;

// get id for all functions
function getLayerById(id,container) { 
!container?container=this:false; 
return getLayer(container,id) }

// get position and visibility
function dSetPosition(position) { this.element.position=position }
function dSetVisibility(visibility) { this.element.visibility=visibility }

// show or hide object
function dShowObject() { this.element.visibility="visible" }
function dHideObject() { this.element.visibility="hidden" }

// set color and background
function dSetColor(color) { this.element.color=color }
function dSetBackgroundColor(color) { this.element.backgroundColor=color }
function dSetColorNC4(color) { return null }
function dSetBackgroundColorNC4(color) { 
this.element.bgColor=color; 
this.object.document.bgColor=color }

// get left and top
function dGetLeft() { 
if(this.element.left=='') { 
this.element.left=this.object.offsetLeft+'px' } 
return parseInt('0'+this.element.left,10) }
function dGetTop() { 
if(this.element.top=='') { 
this.element.top=this.object.offsetTop+'px' } 
return parseInt('0'+this.element.top,10) } 
function dGetLeftNC4() { return this.element.left } 
function dGetTopNC4() { return this.element.top } 

// set left and top
function dSetLeft(left) { this.element.left=left+'px' } 
function dSetTop(top) { this.element.top=top+'px' } 
function dSetLeftNC4(left) { this.element.left=left } 
function dSetTopNC4(top) { this.element.top=top } 

// move objects
function dMoveBy(x,y) { this.moveTo(this.getLeft()+x,this.getTop()+y) }
function dMoveTo(x,y) { this.setLeft(x); this.setTop(y) }

// get and seet z-index
function dGetzIndex() { return this.element.zIndex }
function dSetzIndex(z) { this.element.zIndex=z }

// do nothing function
function dDoNothing() { return null } 

// assign global functions by browser capabilities
if(dynamicBrowser.dom) {
dynamicStyles.prototype.setPositionability=dSetPosition;
dynamicStyles.prototype.setVisibility=dSetVisibility;
dynamicStyles.prototype.showObject=dShowObject;
dynamicStyles.prototype.hideObject=dHideObject;
dynamicStyles.prototype.moveBy=dMoveBy;
dynamicStyles.prototype.moveTo=dMoveTo;
dynamicStyles.prototype.getzIndex=dGetzIndex;
dynamicStyles.prototype.setzIndex=dSetzIndex;
dynamicStyles.prototype.setBackgroundColor=dSetBackgroundColor;
dynamicStyles.prototype.setColor=dSetColor;
dynamicStyles.prototype.getLeft=dGetLeft;
dynamicStyles.prototype.setLeft=dSetLeft;
dynamicStyles.prototype.getTop=dGetTop;
dynamicStyles.prototype.setTop=dSetTop }
else if(dynamicBrowser.nc4) {
dynamicStyles.prototype.setPositionability=dSetPosition;
dynamicStyles.prototype.setVisibility=dSetVisibility;
dynamicStyles.prototype.showObject=dShowObject;
dynamicStyles.prototype.hideObject=dHideObject;
dynamicStyles.prototype.moveBy=dMoveBy;
dynamicStyles.prototype.moveTo=dMoveTo;
dynamicStyles.prototype.getzIndex=dGetzIndex;
dynamicStyles.prototype.setzIndex=dSetzIndex;
dynamicStyles.prototype.setBackgroundColor=dSetBackgroundColorNC4;
dynamicStyles.prototype.setColor=dSetColorNC4;
dynamicStyles.prototype.getLeft=dGetLeftNC4;
dynamicStyles.prototype.setLeft=dSetLeftNC4;
dynamicStyles.prototype.getTop=dGetTopNC4;
dynamicStyles.prototype.setTop=dSetTopNC4;
window.onresize=onResizeNC4  }
else { 
dynamicStyles.prototype.setPositionability=dDoNothing;
dynamicStyles.prototype.setVisibility=dDoNothing;
dynamicStyles.prototype.showObject=dDoNothing;
dynamicStyles.prototype.hideObject=dDoNothing;
dynamicStyles.prototype.moveBy=dDoNothing;
dynamicStyles.prototype.moveTo=dDoNothing;
dynamicStyles.prototype.getzIndex=dDoNothing;
dynamicStyles.prototype.setzIndex=dDoNothing;
dynamicStyles.prototype.setBackgroundColor=dDoNothing;
dynamicStyles.prototype.setColor=dDoNothing;
dynamicStyles.prototype.getLeft=dDoNothing;
dynamicStyles.prototype.setLeft=dDoNothing;
dynamicStyles.prototype.getTop=dDoNothing;
dynamicStyles.prototype.setTop=dDoNothing } 

// nc4 resize function 
function netscapeReload(action) { 
if(dynamicBrowser.nc4) { 
if(action==false) { 
myObject.initialWidth=window.innerWidth; 
myObject.initialHeight=window.innerHeight; 
window.onresize=netscapeReload } 
else { 
if(window.innerWidth!=myObject.initialWidth) { location.reload() }
else if(window.innerHeight!=myObject.initialHeight) { location.reload() } } } }

netscapeReload(false);


