<!--
/* begin functions for rollovers */
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
/* end functions for rollovers */

/* begin global functions */

/* MCS, 4/2/01, Opens a new browser window
		page: the URL of the page to load in the new window
		windowName: a name given to the window
		winWidth, winHeight: the width and height of the new window
*/
function openWindow(page, windowName, winWidth, winHeight, winSpec, flgReturnObj) {
    var sizeSpec;
	if (!winSpec) {
		sizeSpec='toolbar=0,location=0,directories=0,left=10,top=10,status=no,menubar=0,scrollbars=1,resizable=yes,width='+winWidth+',height='+winHeight;
	} else {
		sizeSpec=winSpec+',width='+winWidth+',height='+winHeight;
	}
    var windowObject;
	windowObject=window.open(page,windowName,sizeSpec);
	if (flgReturnObj) return windowObject;
}

/* MCS, 4/2/01, Changes the text in the status bar
		statusText: the text to display
*/
function winStat(statusText) {
	window.status=statusText;
	return true;
}

/* end global functions */

/* begin homepage functions */

/* MCS, 5/4/01, Clears the text in a text input
		formName: the name of the form that contains the input
		inputName: the name of the input to clear
		defaultText: the text that should be cleared
*/
function clearField(formName, inputName, defaultText) {
	var field = eval(getForm(formName) + '.' + inputName);
	if (field.value == defaultText) {
		field.value = '';
	}
	return true;
}

/* MCS, 4/2/01, Checks if a string is a valid email address
				begins with letter or digit, contains letters, digits, or any ".-"
				followed by an "@" followed by letters, digits, or any ".-" followed by two or three letters
		email: the string to test
*/
function IsEmail(email) {
	var emailExp = /([a-z0-9][a-z_0-9-]+\.)*[a-z0-9][a-z_0-9-]+@([a-z0-9][a-z_0-9-]+\.)+[a-z]{2,3}/i;	

	return emailExp.test(email);
}

/* MCS, 5/4/01, Validates that a valid email address has been entered into the registration form
		formName: the name of the form that contains the input
		inputName: the name of the input to test
*/
function validateRegistrationForm(formName, inputName, event) {
	var registrationForm = eval(getForm(formName));
	var emailInput = eval(getForm(formName) + '.' + inputName);
	var retVal = true;
	if(!IsEmail(emailInput.value)) {
		alert("Please enter a valid email address.");
		emailInput.focus();
		retVal = false;
	}
	if (event == 'form') {
		return retVal;
	} else if (retVal == true) {
		registrationForm.submit();
	}
}
function DoNotSubmit() {
	if (window.event) {
		return !(window.event && window.event.keyCode == 13);
	}
}
/* end homepage functions */
// -->
