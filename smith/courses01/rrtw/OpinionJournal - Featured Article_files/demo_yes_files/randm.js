//create a random number and use it to generate iframe or img (depending on browser) for adscout and popup.
//this function will be generated with prep_tags, if customer chose no popup it will generate str1="" so only adscout will be called;
function write_iframe(randnum)
{
	a=navigator.appVersion;
	if ((a.indexOf('MSIE 5')>0) || (a.indexOf('MSIE 6')>0)) {
		//create iframe with call to decide.php and write it:
		str="<iframe src=http://amch.questionmarket.com/adsc/d95343/6/95426/decide.php?code=95426&site=6&survey_num=95343&randnum="+randnum+" width=0 height=0 border=0 frameborder=no marginwidth=0 marginheight=0></iframe>";
		document.write(str);
	} else { //other browsers
		//no popup invitations for none ie, just adscout
		str="<img src=http://amch.questionmarket.com/adsc/d95343/adscout.php?code=95426&site=6&p=0&rw=w&randnum="+randnum+" width=1 height=1>";
		document.write(str);
	}
}
var axel = Math.random()+"";
var rand = (axel * 10000)+"";
var dotat=rand.indexOf(".");
var randnum=rand.substring(0,dotat);
//alert (randnum);
str="<SCRIPT>document.onLoad=write_iframe(randnum)</SCRIPT>";
document.write(str);
