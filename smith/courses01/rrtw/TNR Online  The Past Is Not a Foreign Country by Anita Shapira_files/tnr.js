	
	var winW
	
	function windowWidth() {

         winW = (ns4) ? window.innerWidth-16 : document.body.offsetWidth-20
         winH = (ns4) ? window.innerHeight : document.body.offsetHeight
		
		 return winW;
	}
	

	function reDo() {
				
		 	if (mac){
		 	
		 		if (explorer){
		 	
		 			newWidth = (ns4) ? window.innerWidth-16 : document.body.offsetWidth-20
		 			
		 			if (newWidth != winW){
		 			
		 			window.location.reload();
		 			
		 			}
		 		
		 		}else{
        		
        			window.location.reload();
        			
        		}
         
        	}else{
        	
        		if (explorer){
        		
        			if (document.location.href.indexOf('_print') == -1){
         		
        			showAd();
        			
        			}
        			
        		}else{
        		
        			if (parseFloat(navigator.appVersion) != 4.08){
        		
        			window.location.reload();
        			
        			}
        			
        		}
          
        	}
                
    }


        window.onresize = reDo;

        

   	function showAd() {
   	
    	
   		minWidth = (mac ? 740 : 755);
	
		if (windowWidth() >= minWidth){	
		
         	if (ie4){
			
			document.all.sidebar.style.pixelLeft = 617;
			document.all.sidebar.style.pixelTop = 0;
			
		 	document.all.sidebar.style.visibility = "visible";
		 
		 	}else if (ns4){
		 	
		 	document.sidebar.left = 617;
		 	document.sidebar.top = 0;
		
		 	document.sidebar.visibility = "show";
		 
		 	}
		 	
		 }else{
		 
         	if (ie4){
         	
         	document.all.sidebar.style.pixelLeft = 0;
         	document.all.sidebar.style.pixelTop = -1000;  //only thing that prevents horizontal scrollbar from appearing in Netscape for Win

		 	document.all.sidebar.style.visibility = "visible";
		 
		 	}else if (ns4){
		 	
		 	document.sidebar.left = 0;
		 	document.sidebar.top = -1000;  //only thing that prevents horizontal scrollbar from appearing in Netscape for Win
		
		 	document.sidebar.visibility = "show";
		 
		 	}
		 
		 }
		 	
	} 
	       
   
   	function textBox() {
   	
   		if (mac){
   	
   			if (explorer){
   		   	
   				size = 11;
   				
   			}else{
   			
   				size = 11;
   				
   			}
   	
   		}else{
   		
   			if (explorer){
   		   	
   				size = 9;
   				
   			}else{
   			
   				size = 8;
   				
   			}
   			
   		}
   	
   	   	document.write("<input type=\"text\" name=\"sp-q\" size=\""+size+"\" value=\"\">");
  
	}
	
	function alignIE(){
	
		if (explorer){
			document.write("<img align=\"left\" src=\"images/sitewide/xc.gif\" alt=\"the new republic\" width=\"1\" height=\"1\" hspace=\"8\" vspace=\"0\" border=\"0\">");
		}

	}
	
	function popIt(theFile){
	
	var popWindow = window.open(theFile,'pop','width=420,height=300,top=0,left=0,scrollbars=yes,statusbar=no,toolbar=no,resizable=yes');

	}

	function cookiePop(theFile){
	
	var popWindow = window.open(theFile,'pop','width=330,height=250,top=0,left=0,scrollbars=no,statusbar=no,toolbar=no,resizable=yes');

	}


//---------  doubleclick ad script 


var begin = new Date();
var startYear = new Date("January 1, 1970");
startYear.setYear(begin.getYear());
var adRandomOrd = (begin.getTime() - startYear.getTime());




