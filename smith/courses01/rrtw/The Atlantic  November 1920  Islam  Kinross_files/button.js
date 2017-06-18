document.write('<script language="JavaScript"> \n');
document.write('window.onerror=function(){clickURL=document.location.href;return true;} \n');
document.write('if(!self.clickURL) clickURL=parent.location.href; \n');
document.write('<\/script> \n');

var cvsVersion="$Revision: 1.56 $";
var version = cvsVersion.replace(/\s+\S$/,"").replace(/\S+\s*/,"");
var partnerID=57;

var btn=new Image();
btn.src="http://imp.clickability.com/"+Math.random()+"&"+escape(getClickTitle())+"&"+escape(getClickURL())+"?1"+"1"+"1"+"0"+"0"+"0"+"0000|"+"5210"+"|"+"4300"+"|"+"3060"+"|"+"57"+"|"+"57"+"|"+"1"+"|"+version+"|";

/****************Don't Change Below****************/
var IMG="http://a449.g.akamai.net/f/449/1776/1d/button.clickability.com/img/com/";
var ST, ET, PT, MP, altST, altET, altPT, altMP, textWrap, iCol, tCol;
var spons, sponLoc, sponIntro, sponCol, sponTagTop, sponTagBot, sponFunc;
var bLay=new Array(), sponLay=new Array();

/*App URL */
var popWin="'click','width=510,height=480,resizable=1,scrollbars=1'";
var commonLoc="&fb=Y&url='+escape(getClickURL())+'&title='+escape(getClickTitle())+'&random='+Math.random()+'&partnerID="+partnerID+"&expire='+escape(getClickExpire()),"+popWin;
var saveLoc="http://theatlantic.politics.savethis.clickability.com/st/saveThisApp?clickMap=saveThis"+commonLoc;
var emailLoc="http://theatlantic.politics.emailthis.clickability.com/et/emailThis?clickMap=create"+commonLoc;
var printLoc="http://theatlantic.politics.printthis.clickability.com/pt/printThis?clickMap=printThis"+commonLoc;
var popularLoc="http://theatlantic.politics.emailthis.clickability.com/et/emailThis?clickMap=topTen&fb=Y&MPbut=Y&popularType=1&partnerID="+partnerID+"',"+popWin;

/*Functions*/
function drawBtn(type,text) {
	if(type=='h' || type =='H') type='h';
	if(type=='v' || type =='V') type='v';
	var i=bLay.length;
	sponLay[i]=sponTagBot;
	bLay[i]="";

	//start no wrap button
	if (!textWrap) {
		var sIconImg=IMG+iCol+"/"+type+"-s-icon-l.gif";
		var sTextImg=IMG+tCol+"/"+type+"-s-text-l.gif";
		var eIconImg=IMG+iCol+"/"+type+"-e-icon-l.gif";
		var eTextImg=IMG+tCol+"/"+type+"-e-text-l.gif"; 
		var pIconImg=IMG+iCol+"/"+type+"-p-icon-l.gif";
		var pTextImg=IMG+tCol+"/"+type+"-p-text-l.gif";
		var mpIconImg=IMG+iCol+"/"+type+"-mp-icon-l.gif";
		var mpTextImg=IMG+tCol+"/"+type+"-mp-text-l.gif";
		if (type=='h') {
			var iconHeight=18,sIconWidth=34,eIconWidth=30,pIconWidth=31,sTextWidth=50,eTextWidth=56,pTextWidth=55,mpIconWidth=30,mpTextWidth=77;
		}
		else {
			var iconHeight=23,sIconWidth=35,eIconWidth=35,pIconWidth=35,sTextWidth=55,eTextWidth=55,pTextWidth=55,mpIconWidth=35,mpTextWidth=77;
		}
	
	}
	//end no wrap button
	
	//start wrap button
	if (textWrap) {
		var sIconImg=IMG+iCol+"/"+type+"-s-icon-s.gif";
		var sTextImg=IMG+tCol+"/"+type+"-s-text-s.gif";
		var eIconImg=IMG+iCol+"/"+type+"-e-icon-s.gif";
		var eTextImg=IMG+tCol+"/"+type+"-e-text-s.gif"; 
		var pIconImg=IMG+iCol+"/"+type+"-p-icon-s.gif";
		var pTextImg=IMG+tCol+"/"+type+"-p-text-s.gif";
		var mpIconImg=IMG+iCol+"/"+type+"-mp-icon-s.gif";
		var mpTextImg=IMG+tCol+"/"+type+"-mp-text-s.gif";
		if (type=='h') {
			var iconHeight=24,sIconWidth=35,eIconWidth=30,pIconWidth=32,sTextWidth=30,eTextWidth=34,pTextWidth=31,mpIconWidth=31,mpTextWidth=53;
		}
		else {
			var iconHeight=32,sIconWidth=35,eIconWidth=35,pIconWidth=35,sTextWidth=32,eTextWidth=32,pTextWidth=32,mpIconWidth=35,mpTextWidth=50;
		}
	}
	//end wrap button
	
	//start sponsor top
	if (spons) {
		if (type=='h') {
			if (sponLoc=="top") {
				document.write('<table><tr><td align="right"><table><tr><td><span style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; color: #000000">'+sponIntro+'</span> </td><td>');
				eval(sponTagTop);
				document.write('</td></tr></table></td></tr><tr><td>');	
			}
			else {
				document.write('<table><tr><td>');	
			}
		}
	}
	//end sponsor top
	
	if (type=='h') document.write('<nobr>');
	
		
	//start SAVE THIS
	if (ST) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"window.open('"+saveLoc+");return(false);\" onMouseOver=\"window.status='SAVE THIS';return(true);\" onMouseOut=\"window.status='';return(true);\">";
		bLay[i]+="<IMG src=\""+sIconImg+"\" width=\""+sIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altST+"\" title=\""+altST+"\">";
		if (text) bLay[i]+="<IMG src=\""+sTextImg+"\" width=\""+sTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altST+"\" title=\""+altST+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end SAVE THIS
	
	//start EMAIL THIS
	if (ET) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"window.open('"+emailLoc+");return(false);\" onMouseOver=\"window.status='EMAIL THIS';return(true);\" onMouseOut=\"window.status='';return(true);\">";
		bLay[i]+="<IMG src=\""+eIconImg+"\" width=\""+eIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altET+"\" title=\""+altET+"\">";
		if (text) bLay[i]+="<IMG src=\""+eTextImg+"\" width=\""+eTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altET+"\" title=\""+altET+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";		
	}
	//end EMAIL THIS
	
	//start PRINT THIS
	if (PT) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"window.open('"+printLoc+");return(false);\" onMouseOver=\"window.status='PRINT THIS';return(true);\" onMouseOut=\"window.status='';return(true);\">";
		bLay[i]+="<IMG src=\""+pIconImg+"\" width=\""+pIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altPT+"\" title=\""+altPT+"\">";
		if (text) bLay[i]+="<IMG src=\""+pTextImg+"\" width=\""+pTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altPT+"\" title=\""+altPT+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end PRINT THIS
	
	//start MOST POPULAR
	if (MP) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"window.open('"+popularLoc+");return(false);\" onMouseOver=\"window.status='MOST POPULAR';return(true);\" onMouseOut=\"window.status='';return(true);\">";
		bLay[i]+="<IMG src=\""+mpIconImg+"\" width=\""+mpIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altMP+"\" title=\""+altMP+"\">";
		if (text) bLay[i]+="<IMG src=\""+mpTextImg+"\" width=\""+mpTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altMP+"\" title=\""+altMP+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end MOST POPULAR
	
	document.write(bLay[i]);
	if (type=='h') document.write('</nobr>');
	
	//start spons bottom
	if (spons) {
		if (sponLoc=="top") {
			document.write('</td></tr></table>');	
		}
		else if (type=='h') {
			document.write('</td><td valign="top">');
			if (sponIntro) document.write('<span style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; color: #000000">'+sponIntro+'</span><br>');
			eval(sponTagTop);
			document.write('</td></tr></table>');	
		}
		else {
			document.write('<div><table><tr><td> ');
			if (sponIntro) document.write('<span style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; color: #000000">'+sponIntro+'</span><br> ');
			eval(sponTagTop);
			document.write('</td></tr></table></div>');
		}
	}
	//end spons bottom
}
function initBtn() {
	var a=initBtn.arguments;
	ST=a[0]; ET=a[1]; PT=a[2]; MP=a[3]
	textWrap=a[4]; iCol=a[5]; tCol=a[6];
}
function initSponsor() {
	var a=initSponsor.arguments;
	spons=a[0]; sponLoc=a[1]; sponIntro=a[2]; sponCol=a[3]; sponTagTop=a[4]; sponTagBot=a[5]; sponFunc=a[6];
}
function initAlt(save,email,print,mostpopular) {
	altST = (save) ? "Save a link to this article and return to it at www.savethis.com":"";
	altET = (email) ? "Email a link to this article":"";
	altPT = (print) ? "Printer-friendly version of this article":"";
	altMP = (mostpopular) ? "View a list of the most popular articles on our site":"";
}
function btnDone() {
	for (i=0;i<sponLay.length;i++) {
		if (sponLay[i]) eval(sponLay[i]);
	}
}
function getClickURL() {
	if (self.clickURL) return clickURL;
	return document.location.href;
}
function getClickTitle() {
	if (self.clickTitle) return clickTitle;
	return document.title;
}
function getClickExpire() {
	if (self.clickExpire) return clickExpire; 
	return "";
}

//Init param
initBtn(1,1,1,0,1,'003333','003333');
initSponsor(0,'right',' ','000000',' ',' ',' ');
initAlt(1,1,1,1);
eval(sponFunc);
drawBtn('H',1);

