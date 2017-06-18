<!--

var formName = new Array();
formName['send'] = 'http://www.opinionjournal.com/forms/email_Article.html?id=';
formName['respond'] = 'http://www.opinionjournal.com/forms/respond_Article.html?id=';
formName['get'] = 'http://www.opinionjournal.com/forms/get_email.html?id=';
formName['editor'] = 'http://www.opinionjournal.com/forms/respond_ed.html';
formName['print'] = 'http://www.opinionjournal.com/forms/printThis.html?id=';
formName['os_print'] = 'http://www.opinionjournal.com/extra/os_printThis.html?dmod=';


function popWin( ftype, articleId ) {
	var target = formName[ftype] + articleId;
	var winName = 'ojChild';
	var winParams = 'WIDTH=550,HEIGHT=490,SCROLLBARS=yes,NORESIZE';
   if ( ftype == "respond" ) {
       winParams = 'WIDTH=550,HEIGHT=480,SCROLLBARS=yes,RESIZABLE=yes';
   } else if ( ftype == "print" || ftype == "os_print") {
       winName = 'print';
       winParams = 'WIDTH=640,SCROLLBARS=yes,TOOLBAR=1,PERSONALBAR=0,STATUSBAR=1,RESIZABLE';
   }

	   window.open( target, winName, winParams);
}

function popWindow( ftype, articleId ) {
   popWin( ftype, articleId );
}

// -->
