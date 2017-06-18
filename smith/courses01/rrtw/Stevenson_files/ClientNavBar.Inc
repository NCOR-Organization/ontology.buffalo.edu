var g_elHighlighted = null;
var g_elDownMenu = null;

var g_elShow = null;
var showMenuTimer = null;
var showMenuTimeout = 100;

var hideMenuTimer = null;
var hideMenuTimeout = 1000;


function doc_onclick() {
  var e = window.event.srcElement;
  var i = 0;
  
  clearTimers();
  HideDownMenu();
  if (document.all.item("AuthorBio") != null)
		document.all.item("AuthorBio").style.visibility = "hidden";

  if ( e != null) {
    if (e.children.length > 0) {
      for(i=0;i<e.children.length;i++) {
          if (e.children(i).tagName == "A" && e.children(i).href != "" && ( e.children(i).className == "p1" || e.children(i).className == "p2" || e.children(i).className == "pnewred") ) {
			e.children(i).click();
          }
      }
    } 
  }
}

function HideDownMenu() {
	if (g_elDownMenu)
	{
        ShowAd(true, null);
        UnHighlightLabel(g_elHighlighted);
		g_elDownMenu.style.visibility = "hidden";
        g_elDownMenu = null;
    }
}

function MenuPos(elSrc, elMenu) 		{
	var nLeft=0;
	var nRight=0;
	var nLeftOffset=0;
	var nTop=0;
    
    if (  elSrc.sourceIndex > SlateMenu(1).sourceIndex) {
	   nTop = SlateMenu(1).offsetTop - elMenu.offsetHeight;
	}
    else {
       nTop = SlateMenu(0).offsetTop + SlateMenu(0).offsetHeight;
    }

    nRight = SlateMenu(0).offsetLeft + SlateMenu(0).offsetWidth;
    nLeft = elSrc.offsetParent.offsetLeft + elSrc.offsetLeft;
    if (nLeft + elMenu.offsetWidth > nRight) {
		nLeft = nRight - (elMenu.offsetWidth);
    }

	elMenu.style.left =  nLeft;
    elMenu.style.top = nTop;
    elMenu.style.zIndex = 1;
            
}
function ToggleMenuElement(el, bForceShow) 		{
	menu = document.all(el.id + "Menu");
	
	if ( menu != null) { 
		MenuPos(el, menu);

		if (g_elHighlighted != el)
			HideDownMenu();

		if (menu.style.visibility == "hidden" || bForceShow)
		{
			g_elDownMenu = menu;		
			menu.style.visibility = "visible";
			ShowAd(false, menu);
			document.onclick = doc_onclick;
		}
		else
		{
			g_elDownMenu = null;
			menu.style.visibility = "hidden";
			ShowAd(true, null);
		}
		if (window.event) window.event.cancelBubble = true;
	}
}

function ovrTD()
{
	clearTimers();
	var el = window.event.srcElement;
   if (el.tagName != "TD") 
       el = el.offsetParent;
   if (el.tagName == "TD") {
      el.parentElement.style.backgroundColor = "#FFFFFF";
      window.event.cancelBubble = true;
   }
}
function outTD(sClr) 
{
   var el = window.event.srcElement;

   if (el.tagName != "TD") 
       el = el.offsetParent;
   if (el.tagName == "TD") {
      el.parentElement.style.backgroundColor = sClr; 
	  window.event.cancelBubble = true;
   }
   hideMenuTimer = window.setTimeout("HideDownMenu()", hideMenuTimeout);   
}

function ToggleVisibility(el)
{
	if (document.all && (document.all.item(el) != null)) 
	{
		if (document.all.item(el).style.visibility == "visible")
			document.all.item(el).style.visibility = "hidden";
		else {
			document.onclick = doc_onclick;
			document.all.item(el).style.visibility = "visible";
		}
		window.event.cancelBubble = true;
	}
}

function ShowAd(b, mnu) {
  var elAd = document.all.item("Ad");
  if ( elAd != null) {
		if (b) elAd.style.visibility = "visible";
		else {
				elAd.style.visibility = "hidden";
		}
  }
}

function OvrLbl(el) {
	clearTimers();
	if (g_elHighlighted != el) {
	    if (el.children(0).style.color != "#ffffff") {
			el.style.backgroundColor = el.children(1).style.color;
						
			el.children(0).style.color = "#ffffff";
			el.children(1).style.color = "#ffffff";

		}
		g_elShow = el;
		if (g_elDownMenu) ToggleMenuElement(el,true);
		g_elHighlighted = el;
	}
	showMenuTimer = window.setTimeout("ToggleMenuElement(g_elShow, true)", showMenuTimeout);	   
	window.event.cancelBubble = true;
}

function OutLbl(el) {
	clearTimers();
	if (window.event.toElement != null)
		if (window.event.toElement == el || window.event.toElement.parentElement == el) 
			return false;
		
	if (g_elDownMenu==null) {
	    UnHighlightLabel(el);
    }
   window.event.cancelBubble = true;
   hideMenuTimer = window.setTimeout("HideDownMenu()", hideMenuTimeout);
}

function UnHighlightLabel(el) {
	if (el) {
		if (el.children.length > 0)
		{
			var sSection = el.children(0).innerText 
			var elCurrent = document.all("txtCurrent");
			if (elCurrent) {
				if (sSection.toLowerCase() != elCurrent.value.toLowerCase()) {
					el.children(0).style.color = "#000000";
					el.children(1).style.color = el.style.backgroundColor;
					el.style.backgroundColor = "#ffffff";
				}
			}	
		}
	}
	g_elHighlighted=null;
}

function ClkLbl(el) {
	ToggleMenuElement(el, false) ;
}

function ovrTD1(el)
{
	clearTimers();
	if (el.style.backgroundColor != "#666666") {
	  el.style.backgroundColor = "#CCCCCC";
	  el.children(0).children(0).style.color = "#660033";
	  //2000.02.18 a-dansh
	  //with the TOC redesign, there is no more right arrow (children(1)), so
	  //we don't need to apply a color to it.
	  //el.children(0).children(1).style.color = "#660033";
	}
	window.event.cancelBubble = true;
}

function outTD1(el) 
{
	if (el.style.backgroundColor != "#666666") {
	  el.style.backgroundColor = "#660033";
	  el.children(0).children(0).style.color = "#FFCC00";
	  //el.children(0).children(1).style.color = "#FFFFFF";
	}
	window.event.cancelBubble = true;
	hideMenuTimer = window.setTimeout("HideDownMenu()", hideMenuTimeout);
}

function toggleDisplay(el)
{
	if (document.all && (document.all.item(el) != null)) 
	{
		if (document.all.item(el).style.display == "")
			document.all.item(el).style.display = "none";
		else {
			document.onclick = doc_onclick;
			document.all.item(el).style.display = "";
		}
		window.event.cancelBubble = true;
	}
}

function swapColor(el, sColor)
{
	el.style.color = sColor;
	for(i=0;i<el.children.length;i++)
	{
		if (el.children(i).tagName == "FONT")
		{
			el.children(i).color = sColor;
			return;
		}
	}
}

function clearTimers() {
	if (showMenuTimer != null) 	window.clearTimeout(showMenuTimer);
	if (hideMenuTimer != null)  window.clearTimeout(hideMenuTimer);
}