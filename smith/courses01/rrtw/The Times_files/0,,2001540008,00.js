 OAS_url ='http://multi1.rmuk.co.uk/RealMedia/ads/';  
  OAS_listpos = 'Top,Position1,Middle,Position2';  
  OAS_query = '';  
  OAS_sitepage = 'www.the-times.co.uk/worldnews/waronterror/november28';  
  OAS_version = 10;  
  OAS_rn = '001234567890';   
  OAS_rns = '1234567890';  
  OAS_rn = new String (Math.random());   
  OAS_rns = OAS_rn.substring (2, 11);  
  OAS_version = 11;
  if (navigator.userAgent.indexOf('Mozilla/3') != -1)
	OAS_version = 10;
	
  if (OAS_version >= 11)
    document.write('<SCRIPT TYPE="text/javascript" LANGUAGE="Javascript1.1" SRC="'+ OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + OAS_query + '"></SCRIPT>');
  
  function OAS_NORMAL(pos)   
  {   
  document.write('<A HREF="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + OAS_query + '" TARGET=_top>');  
  document.write('<IMG SRC="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + OAS_query + '" BORDER=0></A>');  
  }  
  
  function OAS_AD(pos) {  
    if (OAS_version >= 11)  
      OAS_RICH(pos);  
    else  
      OAS_NORMAL(pos);  
  }  
  
  function NI_AD(pos) {  
  
	
        if (pos == 'Top')
	    {  
	      OAS_AD(pos);
		}
	 
	
        if (pos == 'TopRight') {
	      document.write('<a href="http://www.thetimes.co.uk/section/0,,2001380042,00.html" target=new><img src="/picture/0,,2001540374,00.gif" alt="" width="120" height="60" align="middle" border=0></a>');
		}
	   
	
        if (pos == 'Position1')
	    {  
	      OAS_AD(pos);
		}
	 
	
        if (pos == 'Middle')
	    {  
	      OAS_AD(pos);
		}
	 
	
        if (pos == 'Position2')
	    {  
	      OAS_AD(pos);
		}
	  }  
  function NI_ADTITLE(pos) {  
  
     if (pos == 'Top') {
	  document.write('');
    }
  
     if (pos == 'TopRight') {
	  document.write('');
    }
  
     if (pos == 'Position1') {
	  document.write('');
    }
  
     if (pos == 'Middle') {
	  document.write('<TR><TD align=left><FONT color=#990000 face=face="times new roman, times, serif" size=2>Story continues below advertisement</FONT></TD></TR><TR><TD HEIGHT=7></TD></TR>');
    }
  
     if (pos == 'Position2') {
	  document.write('');
    }
   }
 