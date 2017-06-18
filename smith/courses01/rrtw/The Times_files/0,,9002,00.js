 OAS_url ='http://multi1.rmuk.co.uk/RealMedia/ads/';  
  OAS_listpos = '';  
  OAS_query = '';  
  OAS_sitepage = 'www.the-times.co.uk/sundaytimeshome/newspaperedition/terrorism';  
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
  
	
        if (pos == 'Top') {
	      document.write('<a href="http://www.thetimes.co.uk/section/0,,2001320014,00.html" target=new><img src="/picture/0,,2001530147,00.gif" alt="" width="468" height="60" align="middle" border=0></a>');
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
	  document.write('');
    }
  
     if (pos == 'Position2') {
	  document.write('');
    }
   }
 