
<!--
//opens a new browser window

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->


<!-- hide this script from non-javascript-enabled browsers
// pre-cache 'filename' button state images

if (document.images) {
var Nlinebook_up = new Image(400,65)
Nlinebook_up.src = "../../../images/line-book_up.gif"


var Nlinebook_over = new Image(400,65)
Nlinebook_over.src = "../../../images/line-book_over.gif"

}
// function that displays status bar message

function dm(msgStr) {
  document.returnValue = false;
  if (document.images) {
     window.status = msgStr;
     document.returnValue = true;
  }
}
// functions that swap images

function di(id,name){
  if (document.images) document.images[id].src=eval(name+".src");
}

// stop hiding -->

