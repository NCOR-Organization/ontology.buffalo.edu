
function emailArticle(source, pageId, idBio) {

	if (!window.RegExp) {
		alert("E-mails are not supported on this browser. \nPlease use IE4+ or Netscape 4+");
		return;
	}
	var strSRC = "/code/mySlate/dialogs/emailframeset.asp" ;
	var strAction = "/code/story/actions/email.asp";

	if (source=='24Seven')
		strAction += "?idMessage=" + pageId + "&idBio=" + idBio;
	else
		strAction += "?strURL=" + pageId ;

	strSRC += "?action=" + escape(strAction) ;

	// create frameset
	var nWin = window.open(strSRC, "_emailarticle", "toolbar=no,directories=no,menubar=no,status=no,resizable=no,scrollbars=no,width=480,height=400");
	nWin.focus();

}

function printArticle(source, pageId, idBio) {
	if (source=='24Seven')
		window.open("/code/story/actions/print.asp?idMessage="+pageId+"&idBio="+idBio, "Print",
			'toolbar=no,location=no,directories=no,menubar=no,status=no,resizable=yes,scrollbars=yes,width=640,height=480');
	else
		window.open("/code/story/actions/print.asp?strURL="+pageId+"&iMsg="+idBio, "Print",
			'toolbar=no,location=no,directories=no,menubar=no,status=no,resizable=yes,scrollbars=yes,width=640,height=480');

}

function ShowMySlatePop() {
	if (document.all||document.layers) {
		var win = window.open ("/code/mySlate/frameset.asp", "mySlate", "toolbar=no,directories=no,menubar=no,status=no,resizable=yes,scrollbars=no,width=583,height=480");
		//window.location.href = "/code/mySlate/redirect.asp?pageurl=" + escape(window.location.href);
	}
	else {
		alert("You need to use IE4+ or Nestcape 4.7x to use mySlate")
	}

}
