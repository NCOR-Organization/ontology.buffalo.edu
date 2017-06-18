
//**************** begin FLASH click bit ***********************//

document.write("<SCRIPT LANGUAGE='VBScript'>\n");
document.write("on error resume next\n");
document.write("Sub flash_ad_FSCommand(ByVal command, ByVal args)\n");
document.write("call flash_ad_DoFSCommand(command, args)\n");
document.write("end sub");
document.write("</SCRIPT>");





//**************** begin variables ***********************//

// sets version numbers
// edit the following variables ONLY as needed:
// ads_flashVersionNeeded --> version we are sniffing for
// ads_highestVersionReleased --> update when version 6 comes out
// version 2.0
// date: 01.08.2001

var ads_flashVersionNeeded = 4;
var ads_gotFlash2 = false;
var ads_gotFlash3 = false;
var ads_gotFlash4 = false;
var ads_gotFlash5 = false;
var ads_highestVersionReleased = 5;					
var ads_usersVersion = 0;				
var ads_versionIsAcceptable = false;



//**************** begin vb_2_0 ***********************//

// sniffs activex control (instead of flash plug in) on Windows IE with vbscript
// version 1.1
// date: 10.17.2000

var browserIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;		
var OSWindows = (navigator.appVersion.indexOf("Windows") != -1) ? true : false; 
if(browserIE && OSWindows){ 
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('ads_gotFlash2 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
	document.write('ads_gotFlash3 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
	document.write('ads_gotFlash4 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
	document.write('ads_gotFlash5 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');	
	document.write('</SCR' + 'IPT\> \n'); 
}




//**************** begin clientSniffer_2_0 ***********************//


    // convert all characters to lowercase to simplify testing
    var ads_agt=navigator.userAgent.toLowerCase();

    // *** BROWSER VERSION ***
    // Note: On IE5, these return 4, so use ads_is_ie5up to detect IE5.
    var ads_is_major = parseInt(navigator.appVersion);
    var ads_is_minor = parseFloat(navigator.appVersion);

    // Note: Opera and WebTV spoof Navigator.  We do strict client detection.
    // If you want to allow spoofing, take out the tests for opera and webtv.
    var ads_is_nav  = ((ads_agt.indexOf('mozilla')!=-1) && (ads_agt.indexOf('spoofer')==-1)
                && (ads_agt.indexOf('compatible') == -1) && (ads_agt.indexOf('opera')==-1)
                && (ads_agt.indexOf('webtv')==-1));
    var ads_is_nav2 = (ads_is_nav && (ads_is_major == 2));
    var ads_is_nav3 = (ads_is_nav && (ads_is_major == 3));
    var ads_is_nav4 = (ads_is_nav && (ads_is_major == 4));
    var ads_is_nav4up = (ads_is_nav && (ads_is_major >= 4));
    var ads_is_navonly      = (ads_is_nav && ((ads_agt.indexOf(";nav") != -1) ||
                          (ads_agt.indexOf("; nav") != -1)) );
    var ads_is_nav5 = (ads_is_nav && (ads_is_major == 5));
    var ads_is_nav5up = (ads_is_nav && (ads_is_major >= 5));


    var ads_is_ie   = (ads_agt.indexOf("msie") != -1);
    var ads_is_ie3  = (ads_is_ie && (ads_is_major < 4));
    var ads_is_ie4  = (ads_is_ie && (ads_is_major == 4) && (ads_agt.indexOf("msie 5.0")==-1) );
    var ads_is_ie4up  = (ads_is_ie  && (ads_is_major >= 4));
    var ads_is_ie5  = (ads_is_ie && (ads_is_major == 4) && (ads_agt.indexOf("msie 5.0")!=-1) );
    var ads_is_ie5up  = (ads_is_ie  && !ads_is_ie3 && !ads_is_ie4);

    // KNOWN BUG: On AOL4, returns false if IE3 is embedded browser
    // or if this is the first browser window opened.  Thus the
    // variables ads_is_aol, ads_is_aol3, and ads_is_aol4 aren't 100% reliable.
    var ads_is_aol   = (ads_agt.indexOf("aol") != -1);
    var ads_is_aol3  = (ads_is_aol && ads_is_ie3);
    var ads_is_aol4  = (ads_is_aol && ads_is_ie4);

    var ads_is_opera = (ads_agt.indexOf("opera") != -1);
    var ads_is_webtv = (ads_agt.indexOf("webtv") != -1);

    // *** JAVASCRIPT VERSION CHECK ***
    var ads_is_js;
    if (ads_is_nav2 || ads_is_ie3) ads_is_js = 1.0
    else if (ads_is_nav3 || ads_is_opera) ads_is_js = 1.1
    else if ((ads_is_nav4 && (ads_is_minor <= 4.05)) || ads_is_ie4) ads_is_js = 1.2
    else if ((ads_is_nav4 && (ads_is_minor > 4.05)) || ads_is_ie5) ads_is_js = 1.3
    else if (ads_is_nav5) ads_is_js = 1.4
    // NOTE: In the future, update this code when newer versions of JS
    // are released. For now, we try to provide some upward compatibility
    // so that future versions of Nav and IE will show they are at
    // *least* JS 1.x capable. Always check for JS version compatibility
    // with > or >=.
    else if (ads_is_nav && (ads_is_major > 5)) ads_is_js = 1.4
    else if (ads_is_ie && (ads_is_major > 5)) ads_is_js = 1.3
    // HACK: no idea for other browsers; always check for JS version with > or >=
    else ads_is_js = 0.0;

    // *** PLATFORM ***
    var ads_is_win   = ( (ads_agt.indexOf("win")!=-1) || (ads_agt.indexOf("16bit")!=-1) );
    // NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
    //        Win32, so you can't distinguish between Win95 and WinNT.
    var ads_is_win95 = ((ads_agt.indexOf("win95")!=-1) || (ads_agt.indexOf("windows 95")!=-1));

    // is this a 16 bit compiled version?
    var ads_is_win16 = ((ads_agt.indexOf("win16")!=-1) || 
               (ads_agt.indexOf("16bit")!=-1) || (ads_agt.indexOf("windows 3.1")!=-1) || 
               (ads_agt.indexOf("windows 16-bit")!=-1) );  

    var ads_is_win31 = ((ads_agt.indexOf("windows 3.1")!=-1) || (ads_agt.indexOf("win16")!=-1) ||
                    (ads_agt.indexOf("windows 16-bit")!=-1));

    // NOTE: Reliable detection of Win98 may not be possible. It appears that:
    //       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
    //       - On Mercury client, the 32-bit version will return "Win98", but
    //         the 16-bit version running on Win98 will still return "Win95".
    var ads_is_win98 = ((ads_agt.indexOf("win98")!=-1) || (ads_agt.indexOf("windows 98")!=-1));
    var ads_is_winnt = ((ads_agt.indexOf("winnt")!=-1) || (ads_agt.indexOf("windows nt")!=-1));
    var ads_is_win32 = (ads_is_win95 || ads_is_winnt || ads_is_win98 || 
                    ((ads_is_major >= 4) && (navigator.platform == "Win32")) ||
                    (ads_agt.indexOf("win32")!=-1) || (ads_agt.indexOf("32bit")!=-1));

    var ads_is_os2   = ((ads_agt.indexOf("os/2")!=-1) || 
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||   
                    (ads_agt.indexOf("ibm-webexplorer")!=-1));

    var ads_is_mac    = (ads_agt.indexOf("mac")!=-1);
    var ads_is_mac68k = (ads_is_mac && ((ads_agt.indexOf("68k")!=-1) || 
                               (ads_agt.indexOf("68000")!=-1)));
    var ads_is_macppc = (ads_is_mac && ((ads_agt.indexOf("ppc")!=-1) || 
                                (ads_agt.indexOf("powerpc")!=-1)));

    var ads_is_sun   = (ads_agt.indexOf("sunos")!=-1);
    var ads_is_sun4  = (ads_agt.indexOf("sunos 4")!=-1);
    var ads_is_sun5  = (ads_agt.indexOf("sunos 5")!=-1);
    var ads_is_suni86= (ads_is_sun && (ads_agt.indexOf("i86")!=-1));
    var ads_is_irix  = (ads_agt.indexOf("irix") !=-1);    // SGI
    var ads_is_irix5 = (ads_agt.indexOf("irix 5") !=-1);
    var ads_is_irix6 = ((ads_agt.indexOf("irix 6") !=-1) || (ads_agt.indexOf("irix6") !=-1));
    var ads_is_hpux  = (ads_agt.indexOf("hp-ux")!=-1);
    var ads_is_hpux9 = (ads_is_hpux && (ads_agt.indexOf("09.")!=-1));
    var ads_is_hpux10= (ads_is_hpux && (ads_agt.indexOf("10.")!=-1));
    var ads_is_aix   = (ads_agt.indexOf("aix") !=-1);      // IBM
    var ads_is_aix1  = (ads_agt.indexOf("aix 1") !=-1);    
    var ads_is_aix2  = (ads_agt.indexOf("aix 2") !=-1);    
    var ads_is_aix3  = (ads_agt.indexOf("aix 3") !=-1);    
    var ads_is_aix4  = (ads_agt.indexOf("aix 4") !=-1);    
    var ads_is_linux = (ads_agt.indexOf("inux")!=-1);
    var ads_is_sco   = (ads_agt.indexOf("sco")!=-1) || (ads_agt.indexOf("unix_sv")!=-1);
    var ads_is_unixware = (ads_agt.indexOf("unix_system_v")!=-1); 
    var ads_is_mpras    = (ads_agt.indexOf("ncr")!=-1); 
    var ads_is_reliant  = (ads_agt.indexOf("reliantunix")!=-1);
    var ads_is_dec   = ((ads_agt.indexOf("dec")!=-1) || (ads_agt.indexOf("osf1")!=-1) || 
           (ads_agt.indexOf("dec_alpha")!=-1) || (ads_agt.indexOf("alphaserver")!=-1) || 
           (ads_agt.indexOf("ultrix")!=-1) || (ads_agt.indexOf("alphastation")!=-1)); 
    var ads_is_sinix = (ads_agt.indexOf("sinix")!=-1);
    var ads_is_freebsd = (ads_agt.indexOf("freebsd")!=-1);
    var ads_is_bsd = (ads_agt.indexOf("bsd")!=-1);
    var ads_is_unix  = ((ads_agt.indexOf("x11")!=-1) || ads_is_sun || ads_is_irix || ads_is_hpux || 
                 ads_is_sco ||ads_is_unixware || ads_is_mpras || ads_is_reliant || 
                 ads_is_dec || ads_is_sinix || ads_is_aix || ads_is_linux || ads_is_bsd || ads_is_freebsd);

    var ads_is_vms   = ((ads_agt.indexOf("vax")!=-1) || (ads_agt.indexOf("openvms")!=-1));



//**************** begin functions ***********************//


// includes function ads_flashSniffer()
// version 2.0
// date: 01.08.2001

function ads_flashSniffer(){

if ( (ads_is_nav5up) || (ads_is_ie4up) )
	{
	if (navigator.plugins){								
		if (navigator.plugins["Shockwave Flash 2.0"] 	
		|| navigator.plugins["Shockwave Flash"]){		
			var isFlashV2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var desc = navigator.plugins["Shockwave Flash" + isFlashV2].description;
			var versionOfFlash = parseInt(desc.charAt(desc.indexOf(".") - 1));
			ads_gotFlash2 = versionOfFlash == 2;		
			ads_gotFlash3 = versionOfFlash == 3;
			ads_gotFlash4 = versionOfFlash == 4;
			ads_gotFlash5 = versionOfFlash == 5;
		}
	}
	for (var i = 2; i <= ads_highestVersionReleased; i++) {	
		if (eval("ads_gotFlash" + i) == true) ads_usersVersion = i;
	}
	if(navigator.userAgent.indexOf("WebTV") != -1) ads_usersVersion = 2;//edit this with new release of WebTV	
	if (ads_usersVersion >= ads_flashVersionNeeded) { 
		ads_versionIsAcceptable = true;	
		} 
	}
}
ads_flashSniffer();	







	
