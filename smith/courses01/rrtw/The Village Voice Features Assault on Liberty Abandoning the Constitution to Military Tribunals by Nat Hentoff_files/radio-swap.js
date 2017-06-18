if (!useRedirect) {		
	if(hasRightVersion) {	
		var oeTags = '<OBJECT CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
		+ 'WIDTH="140" HEIGHT="192"'
		+ 'CODEBASE="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab">'
		+ '<PARAM NAME="MOVIE" VALUE="http://images.villagevoice.com/radio/radionewblue.swf">'
		+ '<PARAM NAME="PLAY" VALUE="true">'
		+ '<PARAM NAME="LOOP" VALUE="true">'
		+ '<PARAM NAME="QUALITY" VALUE="high">'
		+ '<PARAM NAME="MENU" VALUE="false">'
		+ '<EMBED SRC="http://images.villagevoice.com/radio/radionewblue.swf"'
		+ 'WIDTH="140" HEIGHT="192"'
		+ 'PLAY="true"'
		+ 'LOOP="true"'
		+ 'QUALITY="high"'
		+ 'MENU="false"'
		+ 'TYPE="application/x-shockwave-flash"'
		+ 'PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">'
		+ '</EMBED>'
		+ '</OBJECT>';

		document.write(oeTags); 
	} else {	
		var alternateContent = '<A HREF="http://www.villagevoice.com/radio/tuner.php?source=1"><IMG SRC="http://images.villagevoice.com/radio/radio.gif" WIDTH="141" HEIGHT="160" BORDER=0></A>';
	
		document.write(alternateContent);	
	}
}
