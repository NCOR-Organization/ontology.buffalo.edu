var isNN, isIE, loadURLs=new Array(), loadTimes=new Array(), exitURL, loadURLno=0, scriptID, cookieVRFY;


//set by user


scriptID='myScript1';
cookieVRFY=1;

AddExit('http://www.aril.org/subscribe.htm');


//////////////////////////////////////////////
/// (c) 2001 ASCRIPTS.COM // do not remove! //
//////////////////////////////////////////////



function AddLoad(sURL,iTime)
{
  loadURLs[loadURLno]=sURL;
  loadTimes[loadURLno]=iTime;
  loadURLno++;
}


function AddExit(sURL)
{
  exitURL=sURL;
}



if (parseInt(navigator.appVersion) >= 4) {
    if (navigator.appName == "Netscape") {
	isNN = true;
    } else {
	isIE = true;
    }
}

function errorIgnore(e) { return true; }


function openLoadWin() {
var oldtime=0,mywins;
    for (mywins=0;mywins<loadURLno;mywins++)
    {
       setTimeout("window.open('"+loadURLs[mywins]+"','Loadwin"+mywins+"');self.focus();",(oldtime+loadTimes[mywins])*1000+10);
       oldtime+=loadTimes[mywins];
    }
    return true;
}


function openExitWin() {
    if (exitURL!='')
    {
      var ExitWin = window.open(exitURL,'ExitWin');
      self.focus();
    }
    return true;
}
if ( (cookieVRFY!=1) || (document.cookie.indexOf( scriptID+'PopupPRO=' )==-1) )
{

window.onerror = errorIgnore;


if (isNN) {
    document.captureEvents(Event.UNLOAD | Event.LOAD | Event.ERROR | Event.CLICK);
}

  openLoadWin();
  window.onunload=openExitWin;
  if (cookieVRFY==1){
       document.cookie=scriptID+'PopupPRO=HeyGuys!;path=/';
  }
}

