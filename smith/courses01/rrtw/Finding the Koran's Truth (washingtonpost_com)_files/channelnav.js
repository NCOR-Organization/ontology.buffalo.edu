var randomNum = Math.random()+"";
var randomNumLong = randomNum * 1000000000000000000;
function placeChannelNav(channel)
{
  akamai = "http://a188.g.akamaitech.net/f/188/920/1d/www.washingtonpost.com" ;
  channelNavPath = "/wp-srv/javascript/channelnav/images/" ;

  channelNav = '<A href="http://www.washingtonpost.com/wp-srv/javascript/channelnav/nav_imagemap.map"><IMG src="'+akamai+channelNavPath+channel+'.gif" border="0" width="760" height="42" ismap="true"></a><br clear="all">' ;

  document.write(channelNav) ;
}

// THE FOLLOWING CODE PLACES A UNIVERSAL PERSISTENT COOKIE RESIDENT ON USERS' MACHINES
// THE FOLLOWING CODE PLACES A UNIVERSAL PERSISTENT COOKIE RESIDENT ON USERS' MACHINES
var upc_url = new String(document.location.href) ;

// if (upc_url.indexOf(".washingtonpost.com") > -1)
if (upc_url.indexOf(".washingtonpost.com") > -1)
{
  c = document.cookie; 
  var pos = c.indexOf("WPNIUCID"); 
  if (pos == -1) 
  {
    d = new Date(); 
    i = "WPNI"+ d.getTime() +"."+ Math.round(Math.random()*10000); 
    d.setTime(d.getTime() + 31104000000); 
    document.cookie = "WPNIUCID="+ i + 
                      "; expires="+ d.toGMTString() + 
                      "; path=/"+ 
                      "; domain=.washingtonpost.com";
  }
}
