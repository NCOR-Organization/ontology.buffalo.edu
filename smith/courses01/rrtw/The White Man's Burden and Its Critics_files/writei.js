function writeI(d,f,w,h,e,a,z,u) {
tempLoc = lowCase(location.href) ;
if (tempLoc.indexOf("http://www.boondocksnet.com") == -1) {
	if (tempLoc.indexOf("http://boondocksnet.com") == -1) {
	document.write('<META HTTP-EQUIV="Refresh" CONTENT="0; URL=http://www.boondocksnet.com/">');
	}
	}
else {
	if (e == 1) ext="jpg"
	else ext="gif";
	if (d != "") d = d + "/";
	if (z != 0) {
	document.writeln('<applet name=Zoom');
	document.writeln('codebase = /sys/java');
	document.writeln('archive=ImageZoom2.zip');
	document.writeln('code=ImageZoom2.class');
	document.writeln('width = ' + w);
	document.writeln('height = ' + h + '>');
	document.writeln('<param name=Image value=/graphics/' + d + f + '.' + ext + '>');
	document.writeln('<param name=MaxPercent value=200>');
	document.writeln('<param name=MinPercent value=100>');
	document.writeln('<param name=StartUp value=a>');
	document.writeln('<param name=bgColor value=FFFFFF>');
	document.writeln('<param name=PanSpeed value=7>');
	document.writeln('<param name=messZoomOut value="Shift-Click to Zoom Out">');
	document.writeln('<param name=messageColor value=0000FF>');
	document.writeln('<DIV ALIGN="CENTER">Java is required to view images</DIV>');
	document.writeln('</applet>');
	document.writeln('<DIV ALIGN="CENTER">');
	document.writeln('<TABLE CELLPADDING=0 CELLSPACING=0><TR><TD VALIGN="TOP">');
	document.writeln('<FONT FACE="Arial, Geneva, Helvetica, Sans serif" SIZE="-2">');
	document.writeln('Press mouse button within image to zoom<BR>in; shift and mouse button to zoom out.');
	document.writeln('</FONT></TD><TD>&nbsp;</TD><TD VALIGN="TOP">');
	document.writeln('<form name="cSize">');
	document.writeln('<input type="hidden" size=3 name="percent" value="100">');
	document.writeln('<SMALL><input type="button" onClick="document.Zoom.setSize(document.cSize.percent.value)" value="Reset"></SMALL>');
	document.writeln('</form></TD></TR></TABLE></DIV>');
	}
	else {
	document.writeln('<applet');
	document.writeln('alt = "' + a + '"');
	document.writeln('archive = ImageZoom2.zip');
	document.writeln('codebase = /sys/java');
	document.writeln('code = Img.class');
	document.writeln('width = ' + w);
	document.writeln('height = ' + h + '>');
	if (u != "") document.writeln('<param name=ImgURL value=' + u + '>');
	document.writeln('<param name=AppBGColor value=white>');
	document.writeln('<param name=Image value=/graphics/' + d + f + '.' + ext + '>');
	document.writeln('<DIV ALIGN="CENTER">Java is required to view images</DIV>');
	document.writeln('</applet>');
	}
}
}
