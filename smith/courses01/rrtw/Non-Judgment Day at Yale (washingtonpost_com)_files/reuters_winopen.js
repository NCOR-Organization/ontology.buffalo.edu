
var popupwin = null;
var ary = new Array() ;
var first = true ;
var previous_url ;
  
function winopen(url) 
{
  if (first) 
  {
  	popupwin = window.open(url, "", "width=400,height=275,status=yes,resizable=yes,scrollbars=yes,copyhistory=yes,toolbar=yes,location=yes,left=50,top=200,screenX=50,screenY=200'");
  	popupwin.focus();
  	first = false ;
  } 
  else 
  {
  	if ( popupwin != null && !popupwin.closed && previous_url == url ) { popupwin.focus(); }
  	else 
    {
  		if (popupwin.closed) 
        {
  			popupwin = window.open(url, "", "width=400,height=275,status=yes,resizable=yes,scrollbars=yes,copyhistory=no,toolbar=yes,location=yes,left=50,top=200,screenX=50,screenY=200'");
  			popupwin.focus();
  		} 
      else 
      {
  			popupwin.location = url;
  			popupwin.focus();
  		}
  	}	
  }
  
previous_url = url ;
}
