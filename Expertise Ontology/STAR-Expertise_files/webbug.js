function writeBug(){
//alert("hi there");
newImage=document.createElement("IMG");
newImage.src="http://www.nap.edu/nap-cgi/webbug.cgi?referer=" + document.referrer;
myBody=document.getElementsByTagName("body").item(0);
myBody.appendChild(newImage);
}