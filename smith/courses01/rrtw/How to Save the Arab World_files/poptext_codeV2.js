// poptext code v. 2.5
//  Author - Brenden West. Updated 7-18-01 - Fixed printable version in Netscape.

if (!window.sSelectedImg) { document.write("<SCR"+"IPT LANGUAGE=JAVASCRIPT src=http://www.msnbc.com/m/js/std.js></SCR"+"IPT>"); }
if (!window.bCommonBrill) { document.write("<SCR"+"IPT LANGUAGE=JAVASCRIPT src=http://www.msnbc.com/modules/poptext/common_functions.js></SCR"+"IPT>"); }

var bIE3 = (!document.all && document.frames) // still used by templates
var sUA = navigator.appName.toLowerCase();
var bValidClient = true;
var sSpacer = "<SPACER TYPE=block width=1>";

if (!window.oBr) { var oBr =new Sniff4Brill(); }

function Sniff4Brill() {
  this.ie3 = (!document.all && document.frames);
  this.ie4 = (document.all && sUA.indexOf("webtv") == -1) ? true : false;
  this.ns4 = (document.layers) ? true : false;
  this.ns6 = (document.getElementById && !document.all) ? true : false;
  this.webtv = (sUA.indexOf("webtv") != -1) ? true : false;
}

// Obsolete defaults 
appTop = "";

// Defaults
appHeader = ""; appDeck = ""; appBottom = ""; appWidth = 360; copyHeight = 100; appLayout = 1; appBG = ""; copyWidth = ""; mugHeight = 110; mugWidth = 90; BoxRows = 1; BoxCols = 23; appNav=""; SelectList = ""; appNavStyle = 1; appFmt=1; nRowsPerPage=1; nLinkCols=1; bPrintable=true;sNavLinkStyle="";sNavLinkHover="cc3333";sNavLinkActive="cc9900";

// nav styles: 0=image, 1=dropdown, 2=arrows w/ Next + hed, 3=text links, 4=image rollovers, 5=image rollovers, 6=arrows w/ page numbers, 7=arrows only, 8=timed swap


function OpenBrillWindow(dataname,iFmt) {
	winChild = window.open("about:blank","ChildWindow","width=520,height=440,scrollbars=yes,resizable,menubar");
	setTimeout("childFormat('" +dataname+ "','"+iFmt+"');",1000);
}

function StripHTML(str) { // this function doesn't work for NS 3.0 and earlier.
  if (navigator.appName!="Netscape" || (navigator.appName=="Netscape" && parseFloat(navigator.appVersion)>=3.01)) {
    var strt=str.indexOf('<')
    var nd = str.indexOf('>')
    var str2 = "";  var chk = "";
    while (strt > -1 && nd > -1) {
      chk = str.substring(strt,nd+1).toLowerCase();
      str2 += str.substring(0,strt) + " ";
      if ((chk=="<br>" || chk=="<tr>") && str2!="") { str2 += "\n"; }
      else if (chk=="<p>" && str2!="") { str2 += "\n\n"; }
      else if (chk=="<li>") { str2 += " * "; }
      str = str.substring(nd+1);
      strt=str.indexOf('<')
      nd = str.indexOf('>')
    }
    return str2+str;
  } else {
    return str
  }
}

function WriteInitialText(dataname){
	var data = eval(dataname);
	var popstr = "";
	var bArrows = (data.length > 1 && (appNavStyle == 2 || appNavStyle == 6  || appNavStyle == 7)) ? true : false;
	
	if (document.layers) {
		popstr += "<ILAYER name=poptext_" +dataname+ ">";
		for (i=0;i<data.length;i++) {	
			var vis = (i==0) ? "show" : "hidden";
			if (bArrows && appLayout==2) { sData = data[i]+ "<br>"+sNavArrow(i,dataname); }
			else if (bArrows) { sData = sNavArrow(i,dataname) +"<br>"+ data[i]; }
			else if (appNavStyle==8) { sData = "<font face=verdana,arial size=1><b>" +SelectList[i]+ "</b></font><br>"+ data[i]; }
			else { sData = data[i]; }
			popstr += "<LAYER visibility=\"" +vis+ "\"><html><body>"+sData + "</body></html></LAYER>";
		}
		popstr += "</ILAYER>";
	}
	else if (oBr.ie4) { 
		for (i=0;i<data.length;i++) {	
			var vis = (i==0) ? "show" : "none";	
			if (bArrows && appLayout==2) { sData = data[i]+ "<br>"+sNavArrow(i,dataname); }
			else if (bArrows) { sData = sNavArrow(i,dataname)+"<br>"+ data[i]; }
			else if (appNavStyle==8) { sData = "<font face=verdana,arial size=1><b>" +SelectList[i]+ "</b></font><br>"+ data[i]; }
			else { sData = data[i]; }
			popstr += "<DIV ID=poptext_" +dataname+ " style='display:" +vis+ "'>" + sData + "</DIV>";
		}
	}
	else if (oBr.ns6) { 
		popstr += "<DIV ID=poptext_" +dataname+ ">";
		for (i=0;i<data.length;i++) {	
			var vis = (i==0) ? "show" : "none";
			if (bArrows && appLayout==2) { sData = data[i]+ "<br>"+sNavArrow(i,dataname); }
			else if (bArrows) { sData = sNavArrow(i,dataname)+"<br>"+ data[i]; }
			else if (appNavStyle==8) { sData = "<font face=verdana,arial size=1><b>" +SelectList[i]+ "</b></font><br>"+ data[i]; }
			else { sData = data[i]; }
			popstr += "<DIV style='display:" +vis+ "'>" + sData + "</DIV>";
		}
		popstr += "</DIV>";
	}
	else {
		popstr += "<form name=poptext_" +dataname+ "><textarea name='txtarea' rows=" +rows+ " cols=" +cols+ " wrap='physical'>" +StripHTML(data[0])+ "</textarea></form>";
	}
	return popstr;
}


function Poptext1(dataname) {
	var data = eval(dataname);
	if (appTop) { appHeader = appTop; }
	if (appNav) { appNavStyle = 0;data.appNav=appNav; }
	if (!data.nSwapDivMargin) { data.nSwapDivMargin = 0; }
	data.sEvents = "";

	document.write("<STYLE TYPE=text/css>");
	document.write("#NoBg { background-color:transparent; }");
	document.write("</STYLE>");

	var sPadStyle = " style=\"margin-left:"+data.nSwapDivMargin+";margin-right:"+data.nSwapDivMargin+";margin-top:"+data.nSwapDivMargin+";\"";

	var sCols = (appLayout>2) ? " colspan=2" : "";
	var sPrintLink = (bPrintable) ? "<tr><td " +sCols+" bgcolor=FFFFFF background=i/c.gif><font face=arial size=1><a href='javascript:OpenBrillWindow(\"" +dataname+ "\",\"1\");'>Printable version</a></font></td></tr>" : "";

	if (appWidth == 200) {	// text wraps around the table
		document.write("<table width=" +(appWidth+10)+ " align=left border=0 cellpadding=0 cellspacing=0><TR><TD class=NoBg width=" +appWidth+ ">");
	}
	document.write("<a name=anc_"+dataname+"></a><table border=0 width=" +appWidth+ " cellpadding=0 cellspacing=0 " +appBG+ ">");
	
	if (appHeader) { document.write("<tr><td" +sCols+" background=none><Font Face=Arial Size=4 color=#CC0000><B>" +appHeader+ "</B></Font></td></tr>"); }

	if (appDeck) { document.write("<TR><TD VALIGN=TOP" +sCols+"><Font Face=Arial Size=2><B>" +appDeck+ "</Font></B></TD></TR>"); }

	
	GetappNav(dataname);
	if (appNav) {
		if (appNavStyle == 1 || appNavStyle ==  2 || appNavStyle ==  3|| appNavStyle ==  6|| appNavStyle ==  7) {
		appNav = "<div " +sPadStyle+ ">" +appNav+ "</div>"
		}
	}

	// nav layouts: 1=top, 2=bottom, 3=right, 4=left
	if (appLayout==1) {
		document.write("<tr><td valign=top>" +appNav+sSpacer+ "</td></tr>");
		document.write("<tr><td class=NoBg valign=top height=" +copyHeight+ " " +data.sEvents+ "><div " +sPadStyle+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></div></td></tr>");
	}
	else if (appLayout==2) {
		document.write("<tr><td class=NoBg valign=top height=" +copyHeight+ " " +data.sEvents+ "><div " +sPadStyle+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></div></td></tr>");
		document.write("<tr><td valign=top>" +appNav+sSpacer+ "</td></tr>");
	}
	else if (appLayout==3) {
		document.write("<tr><td><table background=none cellpadding=0 cellspacing=0 align=center width=" +appWidth+ "><tr><td valign=top height=" +copyHeight+ " width=" +copyWidth+ " " +data.sEvents+ "><div " +sPadStyle+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></div></td><td valign=top width=" +(appWidth-copyWidth)+ ">" +appNav+ "</td></tr></table></td></tr>");
	}
	else if (appLayout==4) {
		document.write("<tr><td><table background=none cellpadding=0 cellspacing=0 align=center width=" +appWidth+ "><tr><td class=NoBg valign=top width=" +(appWidth-copyWidth)+ ">" +appNav+ "</td><td valign=top height=" +copyHeight+ " width=" +copyWidth+ " " +data.sEvents+ "><div " +sPadStyle+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></div></td></tr></table></td></tr>");
	}

	if (data.appFooter) {
		document.write("<tr><td " +sCols+ " background=none>" +data.appFooter+ "</td></tr>");
	}

	if (appBottom) { document.write("<tr><td bgcolor=#ffffff background=none align=left valign=top " +sCols+"><font size=1 face=arial,helvetica>" +appBottom+ "</font></td></tr>"); }
	
	document.write( sPrintLink+ " </table>");

	if (appWidth == 200) { document.write("</TD><TD width=10>"+sSpacer+"</TD></TABLE>"); }

	data.appHeader = appHeader;
	data.appDeck = appDeck;
	data.SelectList = SelectList;
	data.appFmt = 1;
	data.appWidth=appWidth;
	if (appNavStyle==0) { data.appHeader += "<br>"+appNav;}	
}

function Poptext2(dataname) {
	var data = eval(dataname);
	appFmt=2;
	var sCols1 = (appLayout>2) ? "6" : "5";
	var sCols2 = (appLayout>2) ? " colspan=2" : "";
	if (appNav) { appNavStyle = 0;data.appNav=appNav; }
	data.sEvents = "";

	var sPrintLink = (bPrintable) ? "<br><font face=arial size=1><a href='javascript:OpenBrillWindow(\"" +dataname+ "\",\"2\");'>Printable version</a> </font>" : "";

	if (appWidth == 200) {	// text wraps around the table
		document.write("<table width=" +(appWidth+10)+ " align=left border=0 cellpadding=0 cellspacing=0><TR><TD width=" +appWidth+ ">");
	}
	document.write("<a name=anc_"+dataname+"></a><table bgcolor=#ffffcc border=0 width=" +appWidth+ "  cellpadding=0 cellspacing=0><tr bgcolor=#003399><td colspan=" +sCols1+" valign=center height=35>&nbsp;&nbsp;<font face=\"arial, helvetica\" size=3 color=FFFFCC><b>" +appHeader+ "</b></td></tr>");
	document.write("<tr><td bgcolor=#003399 width=5 height=5>"+sSpacer+"</td><td width=10 height=5>"+sSpacer+"</td><td width=" +(appWidth-30)+ sCols2 + ">"+sSpacer+"</td><td width=10 height=5>"+sSpacer+"</td><td bgcolor=#003399 width=5 height=5>"+sSpacer+"</td></tr>");
	if (appDeck) {
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td" +sCols2+"><font face=arial size=2>" +appDeck+ "</font></td><td colspan=2>"+sSpacer+"</td></tr>");
	}
	document.write("<tr><td colspan=" +sCols1+">"+sSpacer+"</td></tr>");

	GetappNav(dataname);
	if (appLayout==1) {
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td bgcolor=#ffffcc valign=top>" +appNav+ "</td><td colspan=2>"+sSpacer+"</td></tr>");
		document.write("<tr><td colspan=5>"+sSpacer+"</td></tr>");
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td valign=top height=" +copyHeight+ " " +data.sEvents+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></td><td  colspan=2>"+sSpacer+"</td></tr>");
	}
	else if (appLayout==2) {
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td valign=top height=" +copyHeight+ " " +data.sEvents+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></td><td  colspan=2>"+sSpacer+"</td></tr>");
		document.write("<tr><td colspan=5>"+sSpacer+"</td></tr>");
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td valign=top>" +appNav+ "</td><td colspan=2>"+sSpacer+"</td></tr>");
	}
	else if (appLayout==3) {
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td valign=top width=" +copyWidth+ " " +data.sEvents+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></td><td valign=top width=" +(appWidth-copyWidth-30)+ ">" +appNav+ "</td><td colspan=2>"+sSpacer+"</td></tr>");
	}
	else if (appLayout==4) {
		document.write("<tr><td colspan=2>"+sSpacer+"</td><td valign=top width=" +(appWidth-copyWidth-30)+ ">" +appNav+ "</td><td valign=top width=" +copyWidth+ " " +data.sEvents+ "><font face=arial size=2>" + WriteInitialText(dataname) + "</font></td><td colspan=2>"+sSpacer+"</td></tr>");
	}

	document.write("<tr><td colspan=" +sCols1+" width=1 height=7>"+sSpacer+"</td></tr>");
	document.write("<tr><td bgcolor=#99CCFF width=5 height=5>"+sSpacer+"</td><td width=10 height=5>"+sSpacer+"</td><td width=" +(appWidth-30)+ sCols2 + ">"+sSpacer+"</td><td width=10 height=5>"+sSpacer+"</td><td bgcolor=#99CCFF width=5 height=5>"+sSpacer+"</td></tr>");
	document.write("<tr><td bgcolor=#99CCFF height=5 colspan=" +sCols1+">"+sSpacer+"</td></tr>");
	document.write("<tr><td bgcolor=#ffffff colspan=" +sCols1+">" +appBottom+ sPrintLink + "</td></tr></table>"); 

	if (appWidth == 200) { document.write("</TD><TD width=10>"+sSpacer+"</TD></TABLE>"); }
	
	data.appHeader = appHeader;
	data.appDeck = appDeck;
	data.SelectList = SelectList;
	data.appFmt = 2;
	data.appWidth=appWidth;
}

function Poptext2b(dataname) {
	Poptext1(dataname);
}

function Poptext3(dataname) {
	var data = eval(dataname);
	var swapimg = eval(dataname+"2");
	appFmt=3; var ImgType;
	if (appTop) { appHeader = appTop; }
	if (appNav) { appNavStyle = 0;data.appNav = appNav; }
	
	var sPrintLink = (bPrintable) ? "<tr><td valign=top colspan=2><font face=arial size=1><a href='javascript:OpenBrillWindow(\"" +dataname+ "\",\"3\");'>Printable version</a> </font></td></tr>" : "";
	
	var sPadStyle = " style=\"margin-left:"+data.nSwapDivMargin+";margin-right:"+data.nSwapDivMargin+";margin-top:"+data.nSwapDivMargin+"\";";

	document.write("<STYLE TYPE=text/css>");
	document.write("#NoBg { background-color:transparent; }");
	document.write("</STYLE>");
	
	// check image type
	// 1=single static image,2=single html block,3=multiple static images,4=multiple html blocks
	if (typeof swapimg == "string") {
		if (swapimg.indexOf("/") == 0) {
			ImgType=1;
			var sImgTmp = swapimg;
			var sImgName;
		} else { ImgType=2; }
	} else if (typeof swapimg == "object"){
		if (swapimg[0].indexOf("/") == 0) {
			ImgType=3;
			var iTmp = "";
			for (i=0;i<swapimg.length;i++) {
				iTmp = swapimg[i];
				swapimg[i] = new Image();
				swapimg[i].src = iTmp;
			}
			var sImgTmp = swapimg[0].src;
			var sImgName = " name=\"popmug_" +dataname+ "\"";
		} else { ImgType=4; }
	}

	if (ImgType==1 || ImgType==3) { // write out image
		sImages = "<img src=\"" +sImgTmp+ "\" height=" +mugHeight+ " width=" +mugWidth+ " hspace=0 vspace=0 border=0 align=right" +sImgName+ ">";
	} else if (ImgType==4) { // write out swap layers
		sImages = WriteInitialText(dataname+"2");
	} else { // write out html
		sImages = swapimg;
	}

	GetappNav(dataname);
	if (appWidth == 200) {	// text wraps around the table
		document.write("<table width=" +(appWidth+10)+ " align=left border=0 cellpadding=0 cellspacing=0" +appBG+ "><TR><TD class=NoBg width=" +appWidth+ ">");
	}
	document.write("<a name=anc_"+dataname+"></a><table border=0 width=" +appWidth+ " cellpadding=0 cellspacing=0 " +appBG+ ">");
	document.write("<tr><td class=NoBg align=left colspan=2>" +appHeader+ "</td></tr>");

	if (appLayout==1) {
		document.write("<tr><td class=NoBg height=5 colspan=2>"+sSpacer+"</td></tr>");
		document.write("<tr><td class=NoBg width=" +mugWidth+ " valign=top>" + sImages +"</td><td class=NoBg align=left width=" +(appWidth-mugWidth)+ " valign=top>" + appNav+ "</td></tr>");

	} else if (appLayout==2){
		document.write("<tr><td class=NoBg width=" +(appWidth-mugWidth)+ " height=5>"+sSpacer+"</td><td class=NoBg width=" +mugWidth+ ">"+sSpacer+"</td><td class=NoBg width=15 rowspan=4>"+sSpacer+"</td></tr>");

		document.write("<tr><td class=NoBg align=left valign=top>" + appNav+ "</td><td valign=top>" + sImages +"</td></tr>");
	}
	
	document.write("<tr><td class=NoBg colspan=2 valign=top width=" +(appWidth-25)+ " height=" +copyHeight+ "><div " +sPadStyle+ "><font face=arial size=2>" +WriteInitialText(dataname)+ "</font></div></td></tr>");
	
	if (data.appFooter) {
		document.write("<tr><td colspan=2 background=none>" +data.appFooter+ "</td></tr>");
	}
	
	document.write("<tr><td background=none bgcolor=#ffffff valign=top colspan=2 align=left><font size=1 face=arial,helvetica>" +appBottom+ "</font></td></tr>");

        document.write("<tr><td colspan=2 background=none bgcolor=#FFFFFF class=NoBg><font face=arial size=1><a href='javascript:OpenBrillWindow(\"" +dataname+ "\",\"1\");'>Printable version</a></font></td></tr></table>");

	if (appWidth == 200) { document.write("</TD><TD class=NoBg width=10>"+sSpacer+"</TD></TABLE>"); }

	data.appHeader = appHeader;
	data.appDeck = appDeck;
	data.SelectList = SelectList;
	data.appFmt = 3;
	data.appWidth=appWidth;
}


function childFormat(dataname) {
	var data = eval(dataname);
	var oDoc = winChild.document;
	var sSpacer = "<SPACER TYPE=BLOCK WIDTH=1>";
	oDoc.open();
	var bg = (data.appFmt==2) ? "ffffcc" : "ffffff";
	oDoc.write("<html><body><img src=http://www.msnbc.com/news/mobilechannel/images/msnbc_ban.gif>&nbsp;&nbsp;<font face=arial size=2><b>MSNBC.com</b></font><br><table bgcolor=#" +bg+ " border=0 width=" +data.appWidth+ " cellpadding=0 cellspacing=0>");
	if (data.appFmt==1)  {
		oDoc.write("<tr><td valign=top><font face=arial size=2><b>"+data.appHeader+"</b></font></td></tr><tr><td valign=top><font face=arial size=2><b>"+data.appDeck+"</b></font><hr></td></tr>");
		for (i=0;i<data.length;i++) {
			sHed = (data.SelectList[i]) ? "<font face=arial size=2><b>"+data.SelectList[i]+"</b></font><br>" : "";
			oDoc.write("<tr><td>" +sHed+ "<font face=arial size=2>"+data[i]+"</font><hr></td></tr>");
		}
	} else if (data.appFmt==2){
		oDoc.write("<tr bgcolor=#003399><td colspan=5 valign=center height=35 align=left>&nbsp;&nbsp;<font face=arial size=3 color=#ffffcc><b>"+data.appHeader+"</b></font></td></tr>")
		oDoc.write("<tr><td bgcolor=#003399 width=5 height=5>"+sSpacer+"</td><td bgcolor=#ffffcc width=10 height=5>"+sSpacer+"</td><td bgcolor=#ffffcc width=" +(appWidth-30)+ ">"+sSpacer+"</td><td bgcolor=#ffffcc width=10 height=5>"+sSpacer+"</td><td bgcolor=#003399 width=5 height=5>"+sSpacer+"</td></tr>")
		if (data.appDeck) {
			oDoc.write("<tr bgcolor=#ffffcc><TD WIDTH=5>"+sSpacer+"</TD><td colspan=2><font face=arial size=2>"+data.appDeck+"</td><TD WIDTH=5 colspan=2>"+sSpacer+"</TD></tr>"); 
		}
		for (i=0;i<data.length;i++) {
			oDoc.write("<tr><td  colspan=2>"+sSpacer+"</td><td><font face=arial size=2><b>"+data.SelectList[i]+"</b></font><br><font face=arial size=2>"+data[i]+"</font></td><td  colspan=2>"+sSpacer+"</td></tr></tr><tr><td colspan=5 height=5>"+sSpacer+"</td></tr>");
		}
		oDoc.write("<tr><td bgcolor=#99CCFF width=5 height=5>"+sSpacer+"</td><td colspan=3 bgcolor=#ffffcc>"+sSpacer+"</td><td bgcolor=#99CCFF width=5 height=5>"+sSpacer+"</td></tr><tr bgcolor=#99CCFF><td height=5 colspan=5>"+sSpacer+"</td></tr>");

	} else {
		var imageMenu = eval(dataname+"2")
		// check image array type
		oDoc.write("<tr><td valign=top colspan=3><font face=arial size=3><b>"+data.appHeader+"</b></font></td></tr><tr><td height=5 colspan=3>"+sSpacer+"</td></tr>");
		for (i=0;i<data.length;i++) {
			if (!imageMenu[i]) { sImg = "<br>"; }
			else if (typeof imageMenu[i] == "object") { sImg = "<img src="+imageMenu[i].src+" align=left>"; }
			else { sImg = imageMenu[i] + "<br>"; }
			oDoc.write("<tr><td width=5>"+sSpacer+"</td><td valign=top>"+sImg+"<font face=arial size=2>"+data[i]+"</font><br></td><td width=5>"+sSpacer+"</td></tr><tr><td width=5>"+sSpacer+"</td><td height=1 bgcolor=#000000>"+sSpacer+"</td><td width=5>"+sSpacer+"</td></tr>");
		}
	}
	oDoc.write("</table></body></html>");
	oDoc.close();
}


function VideoBrill(dataname,sFmt,sImgSize) {
	aData = eval(dataname);
	SelectList = new Array();
	var nPage = 0; var sTmp="";var nFirstRow=0; 
	if (sFmt=="3") {
		mugWidth = 130;
		aData2 = eval(dataname+"2");
	}
	for (i=0;i<aData.length;i++) {
		if (typeof aData[i] == "string") { sTmp += aData[i]; }
		else {
			var sPlayBut = "<img src=\"/site_elements/vid_play_button.gif\" border=0 width=73 height=18 name=b_v"+i+"_" +dataname+ ">";

			var sHref = "<A HREF=\"javascript:m_OpenMP('','V','" +aData[i][0]+ "','0','','','');\" onmouseover=SwapImage('b_v"+i+"_" +dataname+ "',1); onmouseout=SwapImage('b_v"+i+"_" +dataname+ "',0);>";
			 
			var sHed = (aData[i][1]) ? "<b><font size=2 face=Arial>" +aData[i][1]+ "</font></b><br>" : "";

			var imgSrc = (aData[i][3].indexOf("/d/v/92x69/")==0) ? aData[i][3] : "http://www.msnbc.com/d/v/130x100/"+aData[i][0]+".jpg" ;

			if (sFmt=="3") {
				if (aData[i][0].indexOf("|") > 0) {	// audio/Live links
					aData[i][0] = aData[i][0].split("|");
					aData2[i] = "<A HREF=\"" +aData[i][0][0]+ "\"><img src="+aData[i][3]+"  border=0 height=100 width=130><br><img src=\"http://www.msnbc.com/m/mp/i/play_audio.gif\" border=0 width=130 height=34></A>";

				} else {
					aData2[i] = "<table border=0 width=130 cellspacing=0 cellpadding=0><tr valign=top><td width=130>" +sHref+ "<img src=\"" +imgSrc+ "\" border=0 height=100 width=130></a></td></tr><tr valign=bottom><td align=right height=25>" +sHref+ sPlayBut+ "</A>&nbsp;&nbsp;</td></tr></table>";
				}
				sTmp += aData[i][2];
			}
			else if (appWidth > 200 && !sImgSize) {  // B-col
	
				sTmp += "<table border=0 cellspacing=0 cellpadding=0 width=" +appWidth+ "><tr><td colspan=2 height=4>" +sSpacer+ "</td></tr><tr valign=top><td width=130>" +sHref+ "<img src=\"" +imgSrc+ "\" border=0 height=100 width=130></A></td><td width=10>"+sSpacer+"</td><td rowspan=2>"+sHed+"<font size=2 face=Arial>" +aData[i][2]+ "</font></td></tr><tr valign=bottom><td align=right height=25>" +sHref+sPlayBut+ "</a>&nbsp;&nbsp;</td></table>";
			}
			else if (sImgSize=="vlarge") {	// V-large
				var sHed = (aData[i][1]) ? "<b><font size=3 face=Arial>" +aData[i][1]+ "</font></b><br>" : "";

				appNavStyle=0;
				sTmp += "<table border=0 cellspacing=0 cellpadding=0 width=255><tr valign=top><td colspan=2 width=255>" +sHref+ "<img src=\"http://www.msnbc.com/d/v/250x190/" +aData[i][0]+ ".jpg\" height=190 width=250 border=0 ALT=\"Video\"></a></td></tr><tr valign=middle><td width=180 height=30>" +sNavArrow(i,dataname)+"</td><td width=75 align=right>"+sHref+ sPlayBut+ "</a>&nbsp;&nbsp;&nbsp;</td></tr><tr><td colspan=2>" +sHed+ "<FONT SIZE=1 FACE=Arial>" +aData[i][2]+ "</font></td></tr></table>";
			} else {	// narrow
				sTmp += "<table border=0 width=" +appWidth+ " cellspacing=0 cellpadding=0><tr><td height=4>" +sSpacer+ "</td></tr><tr valign=top><td width=" +appWidth+ ">" +sHref+ "<img src=\"" +imgSrc+ "\" border=0 height=100 width=130></a></td></tr><tr valign=bottom><td align=right height=25>" +sHref+ sPlayBut+ "</A>&nbsp;&nbsp;</td></tr><tr valign=middle><td>" +sHed+ "<font size=1 face=Arial>" +aData[i][2]+ "</font></td></tr></table>";
			}
		}
		if (nRowsPerPage > 0) { sTmp += "<table><tr><td HEIGHT=4>"+sSpacer+"</td></tr></table>"; }

		
		if ((i+1) % nRowsPerPage == 0 || i == aData.length-1) {
			SelectList[nPage] = aData[nFirstRow][1];
			aData[nPage] = sTmp;
			sTmp = "";
			nPage++;
			nFirstRow = i+1;
		}
	}
	aData.length = nPage;
	if (nPage == 1) { bPrintable=false; }
	if (sFmt == "1" || sFmt == "2b") { Poptext1(dataname); }
	else if (sFmt == "2") { Poptext2(dataname); }
	else if (sFmt == "3") { Poptext3(dataname); }
}

var nBrillTimer=0;
function TimeSwap(dataname,nEvent) {
	clearTimeout(nBrillTimer);
	aData = eval(dataname);
	if (!aData.nInterval) { aData.nInterval=2000; }
	if (!nEvent) { 
		aData.nCurPage++;
		if (aData.nCurPage == aData.length) { aData.nCurPage = 0; }
		Swapcopy(dataname,aData.nCurPage);
	}
	nBrillTimer = setTimeout("TimeSwap('" +dataname+ "');", aData.nInterval); 
}

function PoptextGray(dataname) {
	var data = eval(dataname);
	data.BaseColor = "#EFEFE7"
	if (appWidth==360) {
		appBG = "background=/site_elements/brill_gray_bg_360.gif";
		data.appFooter = "<IMG SRC=/site_elements/brill_gray_footer_360.gif>";
	} else if (appWidth==200) {
		appBG = "background=/site_elements/brill_gray_bg_200.gif";
		data.appFooter = "<IMG SRC=/site_elements/brill_gray_footer_200.gif>";
	}
	data.nSwapDivMargin = 10;
	if (appFmt == 1) {
		Poptext1(dataname);
	} else if (appFmt == 3) {
		Poptext3(dataname);
	}
}