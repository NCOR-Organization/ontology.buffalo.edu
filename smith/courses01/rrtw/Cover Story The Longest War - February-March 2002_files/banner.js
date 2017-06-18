<!-- Begin
var how_many_ads = 4;
var now = new Date()
var sec = now.getSeconds()
var ad = sec % how_many_ads;
ad +=1;
if (ad==1) {
url="http://www.landsend.com/le_news.cgi";
alt="landsend.com";
banner="/AMHER/pub_assets/banner_ads/Newsletterwords.gif";
width="468";
height="60";
}
if (ad==2) {
url="http://www.subaru.com";
alt="Subaru, The Beauty of All-Wheel Drive.";
banner="/AMHER/pub_assets/banner_ads/2002Bean_Rugged.gif";
width="468";
height="60";
}
if (ad==3) {
url="http://www.subaru.com";
alt="Subaru, The Beauty of All-Wheel Drive.";
banner="/AMHER/pub_assets/banner_ads/2002Bean_ClothingTag.gif";
width="468";
height="60";
}
if (ad==4) {
url="http://www.ShadeTreeCanopies.com";
alt="Shade Tree Canopies";
banner="/AMHER/pub_assets/banner_ads/shadetree.gif";
width="468";
height="60";
}
document.write('<center>');
document.write('<a href=\"' + url + '\" target=\"_top\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('alt=\"' + alt + '\" border=0><br></a>');
document.write('</center>');
// End -->







