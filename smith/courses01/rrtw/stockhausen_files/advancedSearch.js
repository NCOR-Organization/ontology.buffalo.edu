/* MCS, 8/22/01, These variables are used to capture events. */
if(!document.all) {
	/* NS 4.7 and below */
	if(!document.getElementById) {
		var keyPressSwitch = '.which';
		var targetSwitch = '.target';
		/* MCS, 8/22/01, This is needed by Netscape to capture keyUp events on the page. */
		document.captureEvents(Event.KEYPRESS);
		document.onkeypress = checkKey;
	/* NS 6.0 */
	} else {
		var keyPressSwitch = '.keyCode';
		var targetSwitch = '.target';
	}
/* IE 5.5 and below */
} else {
	var keyPressSwitch = '.keyCode';
	var targetSwitch = '.srcElement';
}

/* MCS, 8/22/01, Checks to see if the "enter" key was just pressed and processes and submits the form if it was. */
function checkKey(evt) {
	var thisKey = eval('evt' + keyPressSwitch);

	if(thisKey != 13) {
		return true;			
	/* MCS, 8/22/01, Process this event only if it occurred in the advanced search form. */
 	} else if (eval('evt' + targetSwitch + '.form') && eval('evt' + targetSwitch + '.form.name') == 'advancedSearchForm') {
		submitAdvancedSearchForm();
	}
}

/* MCS, 4/23/01, This function changes the visibility for the "simpleSearchGo" layer */
function toggleSimpleSearchGo(strVisibility) {
	eval(getLayer('simpleSearchGo') + styleSwitch + '.visibility="' + strVisibility + '";');
}

/* MCS, 4/23/01, This function changes the visibility for the "advancedSearchButton" layer */
function toggleAdvancedSearchButton(strVisibility) {
	eval(getLayer('advancedSearchButton') + styleSwitch + '.visibility="' + strVisibility + '";');
}

/* MCS, 4/23/01, This function changes the visibility for the "advancedSearch" layer */
function toggleAdvancedSearch(strVisibility) {
	eval(getLayer('advancedSearch') + styleSwitch + '.visibility="' + strVisibility + '";');
}

/* MCS, 4/23/01, This function shows the "advancedSearch" layer */
function showAdvancedSearch(path) {
	toggleSimpleSearchGo(hideSwitch);
	toggleAdvancedSearchButton(hideSwitch);
	openWindow(path,'advancedSearch',435,400);
//	toggleAdvancedSearch(showSwitch);
}

/* MCS, 4/23/01, This function hides the "advancedSearch" layer but displays the "advancedSearchButton" layer */
function hideAdvancedSearch() {
	window.opener.eval(getLayer('simpleSearchGo') + styleSwitch + '.visibility="' + showSwitch + '";');
	window.opener.eval(getLayer('advancedSearchButton') + styleSwitch + '.visibility="' + showSwitch + '";');
//	toggleAdvancedSearch(hideSwitch);
}

/* MCS, 4/23/01, This function shows only the "simple search" functionality */
function showSimpleSearch() {
	toggleSimpleSearchGo(showSwitch);
	toggleAdvancedSearchButton(hideSwitch);
//	toggleAdvancedSearch(hideSwitch);
}

/* MCS, 4/23/01, This function checks all the checkboxes in a form */
function selectAllCheckboxes(formName, checkboxName) {
	var formArray = eval(getForm(formName));
	var length = formArray.length;

	for (var i = 0; i < length; i++) {
		if (formArray[i].name == checkboxName) {
			formArray[i].checked = true;
		}
	}
	return;
}

function submitAdvancedSearchForm() {
	var formArray = eval(getForm('advancedSearchForm'));
	var length = formArray.length;
	var globalSearchForm = window.opener.eval(getForm('globalSearchForm'));
	var flgSubmit = false;
	var commaExp = /^,/;

	for (var i = 0; i < length; i++) {
		if (formArray[i].name == 'lstSubsections') {
			if (formArray[i].checked == true ) {
				globalSearchForm.lstSubsections.value = globalSearchForm.lstSubsections.value + ',' + formArray[i].value;
			}
		} else if(formArray[i].type == 'text') {
			eval('globalSearchForm.' + formArray[i].name).value = formArray[i].value;
			if (formArray[i].value.length) {
				flgSubmit = true;
			}
		}
	}

	/* 7/25/01, MCS, Remove the first character from the string if it is a comma. */
	globalSearchForm.lstSubsections.value =	globalSearchForm.lstSubsections.value.replace(commaExp, '');
	
	if (!flgSubmit) {
		alert("Please enter at least one Search Criteria.");
	} else {
		globalSearchForm.submit();
		window.close();
	}
}