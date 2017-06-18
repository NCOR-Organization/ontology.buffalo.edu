<!--

function MM_jumpMenu(targ,selObj,restore){ //v3.0
	if ( !selObj || selObj.options[selObj.selectedIndex].value == "" )
		return;

	// if menu2 then external URL; pop new window
	if ( selObj && selObj.name == "menu2" ) {
      // MG  2000/8/30 - no longer spawinging new window to WSJ.com
      var target = selObj.options[selObj.selectedIndex].value;
      self.location.href = target;
      //var winName = 'WSJ';
      //var winParams = '';
		//window.open( target, winName )	
		//winName.focus;
		//return;	
	}
		
	eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
	if (restore)
		selObj.selectedIndex=0;
}

function MM_findObj(n, d) { //v3.0
	var p,i,x;
	if(!d)
		d=document;
	if( (p=n.indexOf("?") ) > 0 && parent.frames.length ) {
		d=parent.frames[n.substring(p+1)].document;
		n=n.substring(0,p);
	}
	if( !(x=d[n]) && d.all )
		x=d.all[n];
	for  (i=0; !x && i < d.forms.length; i++ )
		x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++)
		x=MM_findObj(n,d.layers[i].document); 
   return x;
}

function MM_jumpMenuGo( selName, targ, restore ) { //v3.0
	var selObj = MM_findObj(selName);
	if (selObj)
		MM_jumpMenu(targ,selObj,restore);
}


function submitSearch() {
   if( document.forms['ojsearch'].where[1].checked ) {
		var target = "http://online.wsj.com/archive/search.cgi?template=atlas-srch-searchrecent-nf.tmpl&";
			target += "form=atlas-srch-searchrecent-nf.html&from-and=AND&to-and=AND&sort=Article-Doc-Date+desc&qand=&";
			target += "bool_query=" + escape(document.ojsearch.query.value) + "&dbname=wsjie&named=dbname&location=article&period=:27&maxitems=30";
			window.open(target,"");
	} else {
		document.forms['ojsearch'].submit();
	}
}

//-->
