function lowCase(str) {
     // returns str in all lowercase letters.
     return str.toLowerCase();
     }

function checkLoc() {
     tempLoc = lowCase(location.href) ;
     if (tempLoc.indexOf("http://www.boondocksnet.com") == -1) {
          if (tempLoc.indexOf("http://boondocksnet.com") == -1) {
              document.write('<META HTTP-EQUIV="Refresh" CONTENT="0; URL=http://www.boondocksnet.com/catch_reprint.htm"><NOSCRIPT>');
               }
          }
}

checkLoc();

cRead = "OK";

var BrowserName = navigator.appName;
var BrowserID = navigator.userAgent;
var BrowserVersion = parseInt(navigator.appVersion);
var BrowserVersionFull = parseFloat(navigator.appVersion);
var Version = "?";

if (BrowserName == "Microsoft Internet Explorer") {
     BrowserVersion = parseInt(navigator.appVersion.substring(navigator.appVersion.indexOf("MSIE") + 4,navigator.appVersion.indexOf("MSIE") + 9));
     BrowserVersionFull = parseFloat(navigator.appVersion.substring(navigator.appVersion.indexOf("MSIE") + 4,navigator.appVersion.indexOf("MSIE") + 9));
     Version = "ie" + BrowserVersion;
     }
else if (BrowserID.indexOf("Mozilla") != -1) {
     Version = "ns" + BrowserVersion;
     }

function jumpTo(newURL) {
     if (newURL != "") {
          top.location.href=newURL
     }
}

var ShortDate = "";

function AssignShortDate() {
     TMonth = new Array('Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.');
     TDate = new Date();
     CurYear  = TDate.getYear();
     CurMonth = TDate.getMonth();
     CurDayOw = TDate.getDay();
     CurDay= TDate.getDate();
     ShortDate = TMonth[CurMonth] + ' ';
     ShortDate += CurDay + ', ';
     ShortDate += (CurYear);
     }

AssignShortDate();

function padnum(number,n) {  // adds leading zeros to number to fill n digits
    var s = number.toString();
    var l = s.length;
    while( l < n ) {
        s = "0" + s;
        l = s.length;
        }
    return s;
}

function genrand(x, y) {
  var range = y - x + 1;
  return Math.floor(Math.random() * range) + x;
}

var randNumber = padnum(genrand(1,999999),6);

function Get_Cookie(name) {
    var start = document.cookie.indexOf(name+"=");
    var len = start+name.length+1;
    if ((!start) && (name != document.cookie.substring(0,name.length))) return null;
    if (start == -1) return null;
    var end = document.cookie.indexOf(";",len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len,end));
}

function Set_Cookie(name,value,expires,path,domain,secure) {
    document.cookie = name + "=" + escape(value) +
        ( (expires) ? ";expires=" + expires.toGMTString() : "") +
        ( (path) ? ";path=" + path : "") + 
        ( (domain) ? ";domain=" + domain : "") +
        ( (secure) ? ";secure" : "");
}

function Delete_Cookie(name,path,domain) {
    if (Get_Cookie(name)) document.cookie = name + "=" +
        ( (path) ? ";path=" + path : "") +
        ( (domain) ? ";domain=" + domain : "") +
        ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function y2k(number)    { return (number < 1000) ? number + 1900 : number; }

function ccyymmdd(date) {
// returns a date in the ccyymmdd format
    return '' + (y2k(date.getYear())) + padnum(date.getMonth() + 1,2) + padnum(date.getDate(),2);
}

function display(count) {
// returns the count in the 0009 format
    return (count < 10) ? '000' + count : ( 
           (count < 100) ? '00' + count : ( 
           (count < 1000) ? '0' + count : count ) );
}

function convert_date(string) {
// converts a string in the format ccyymmdd to a date
    return date = new Date(string.substring(0,4),(string.substring(4,6)-1),string.substring(6,8));
}

function check_if_new(then) {
// returns New if the then date is greater or equal to the last date
     then = convert_date(then);
     if (Date.UTC(y2k(then.getYear()),then.getMonth(),then.getDate(),0,0,0) >=
         Date.UTC(y2k(lastHereDate.getYear()),lastHereDate.getMonth(),lastHereDate.getDate(),0,0,0)) {
         document.write(' <font face=\"arial, verdana\" color=red SIZE=-2><B>New<\/B><\/font>');
     }
}

function check_if_updated(then) {
// returns Updated if the then date is greater or equal to the last date
     then = convert_date(then);
     if (Date.UTC(y2k(then.getYear()),then.getMonth(),then.getDate(),0,0,0) >=
         Date.UTC(y2k(lastHereDate.getYear()),lastHereDate.getMonth(),lastHereDate.getDate(),0,0,0)) {
         document.write(' <font face=\"arial, verdana\" color=red SIZE=-2><B>Updated<\/B><\/font>');
     }
}

var cookieDomain = ".boondocksnet.com";
// var cookieDomain = "";
var visitCounter = 0;
var lastHereDate = "yyyymmdd";
var anonID = "IDIDIDIDyyyymmdd";

var todays_date = new Date();
var expires_date = new Date(todays_date.getTime() + (365 * 86400000)); // 365 days from now
var default_date = new Date(todays_date.getTime() - (21 * 86400000)); // 21 days ago
var expires_soon = new Date(todays_date.getTime() + (1 * 86400000)); // 1 day from now
var lastHere = Get_Cookie("lastVisit");
if (!lastHere) {
     var previous_date = ccyymmdd(default_date);
     var last_date = ccyymmdd(todays_date);
     anonID = padnum(genrand(1,99999999),8) + last_date;
     visitCounter = 1;
     Set_Cookie("lastVisit",last_date + previous_date + "0001" + anonID, expires_date, "/", cookieDomain);
     lastHereDate = default_date;
     }
else {
     var last_date = lastHere.substring(0,8);
     var previous_date = lastHere.substring(8,16);
     visitCounter = lastHere.substring(16,20) * 1;
     anonID = lastHere.substring(20,36);
     if (ccyymmdd(todays_date) != last_date) {
          previous_date = last_date;
          last_date = ccyymmdd(todays_date);
          visitCounter +=1;
          if (visitCounter > 1000) visitCounter = 1; // unlikely, but so was the millennium!
          Set_Cookie("lastVisit",last_date + previous_date + display(visitCounter) + anonID, expires_date, "/", cookieDomain);
          }
    lastHereDate = convert_date(previous_date);
    }

