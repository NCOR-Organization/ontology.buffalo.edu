/**
 * This file contains all the javascript functions used
 * for the ET Telegraph Network dropdown list.
 */
function newSite(sFile) {
	var nId = sFile.indexOf(";$sessionid$");
	var newUrl = "";
	var sId = "";
	var noRedirect = false;

	// if cookies are not used store the session id
	if (nId != -1) {
		sId = sFile.substring(nId);
	}

	var selObject = window.document.fSite.selSite
	switch(selObject.options[selObject.selectedIndex].value) {
		case "1":
			newUrl = "/portal/index.jhtml" + sId;
			break
		case "2":
			newUrl = "/news/index.jhtml" + sId;
			break
		case "3":
			newUrl = "/news/main.jhtml?menuId=551&menuItemId=-1&view=SUMMARY&grid=P1" + sId;
			break
		case "4":
			newUrl = "/news/main.jhtml?menuId=552&menuItemId=-1&view=SUMMARY&grid=P1" + sId;
			break
		case "5":
			newUrl = "/sport/index.jhtml" + sId;
			break
		case "6":
			newUrl = "/travel/index.jhtml" + sId;
			break
		case "7":
			newUrl = "/money/index.jhtml" + sId;
			break
		case "8":
			newUrl = "/motoring/index.jhtml" + sId;
			break
		case "9":
			newUrl = "/core/exit.jhtml" + sId + "?exit=http://jobs.telegraph.co.uk";
			break
		case "10":
			newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.businessfile-online.com";
			break
		case "11":
			newUrl = "/property/index.jhtml" + sId;
			break
		case "12":
			newUrl = "/shopping/index.jhtml" + sId;
			break
		case "13":
			newUrl = "/family/index.jhtml" + sId;
			break
		case "14":
			newUrl = "/fashion/index.jhtml" + sId;
			break
		case "15":
			newUrl = "/gardening/index.jhtml" + sId;
			break
		case "16":
			newUrl = "/health/index.jhtml" + sId;
			break
		case "17":
			newUrl = "/outdoors/index.jhtml" + sId;
			break
		case "18":
			newUrl = "/wine/index.jhtml" + sId;
			break
		case "19":
			newUrl = "/weather/index.jhtml" + sId;
			break
		case "20":
			newUrl = "http://www.telegraph.co.uk/et?pg=/ixfeedb.html";
			break
		case "21":
			newUrl = "http://www.telegraph.co.uk/et?pg=/etc/etchome.html";
			break
		case "22":
			newUrl = "http://www.telegraph.co.uk/et?pg=/etc/ixreview.html";
			break
		case "23":
			newUrl = "http://www.telegraph.co.uk/et?pg=/etc/ixgall.html";
			break
		case "24":
			newUrl = "/connected/index.jhtml" + sId;
			break
		case "25":
			newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.booksonline.co.uk/booksol?ac=004864407344811&rtmo=gjSlkfnu&atmo=gjSlkfnu&pg=/ixbfront.html";
			break
		case "26":
			newUrl = "http://www.telegraph.co.uk/et?pg=/etc/iehoro.html";
			break
		case "27":
			newUrl = "/education/index.jhtml" + sId;
			break
		case "28":
			newUrl = "/juiced/index.jhtml" + sId;
			break
		case "29":
			newUrl = "/connected/main.jhtml" + sId + "?menuId=1536&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&targetRule=10";
			break
		case "30":
			newUrl = "/opinion/index.jhtml" + sId;
			break
		case "31":
			newUrl = "http://www.telegraph.co.uk/et?pg=/etc/ieobit.html";
			break
		case "32":
			newUrl = "http://www.telegraph.co.uk/et?pg=/classad/announcements/index.html";
			break
		case "33":
			newUrl = "http://www.telegraph.co.uk/et?pg=/et/ixcross.html";
			break
		case "34":
			newUrl = "/core/Matt/pMattTemplate.jhtml" + sId + "?pTitle=Matt.telegraph";
			newWin = window.open(newUrl,'Matt','scrollbars,resizable,width=404,height=600');
			noRedirect = true
			break
		case "35":
			newUrl = "/money/Alex/pAlexTemplate.jhtml" + sId + "?pTitle=Alex.telegraph";
			newWin = window.open(newUrl,'Alex','scrollbars,resizable,width=820,height=505');
			noRedirect = true
			break
		case "36":
			newUrl = "/global/index.jhtml" + sId;
			break			
		default:
			noRedirect = true
		}

	if (noRedirect == false) {
		newPWin = window.open(newUrl,'nPWin','menubar,status,scrollbars,resizable,width=800,height=600,toolbar,location');
		newPWin.focus();
	}
	window.document.fSite.selSite.selectedIndex = 0;
}
