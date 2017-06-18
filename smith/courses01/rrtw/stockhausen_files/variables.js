<!--
if(!document.all) {
	/* NS 4.7 and below */
	if(!document.getElementById) {
		var layerSwitch = 'document.layers';
		var formSwitch = 'document.forms';
		var flgNestedForm = true;
		var openBracketSwitch = '["';
		var closeLayerBracketSwitch = '"]';
		var closeFormBracketSwitch = '"]';
		var styleSwitch = '';
		var showSwitch = 'show';
		var hideSwitch = 'hide';
	/* NS 6.0 */
	} else {
		var layerSwitch = 'document.getElementById';
		var formSwitch = 'document.getElementsByName';
		var flgNestedForm = false;
		var openBracketSwitch = '("';
		var closeLayerBracketSwitch = '")';
		var closeFormBracketSwitch = '")[0]';
		var styleSwitch = '.style';
		var showSwitch = 'visible';
		var hideSwitch = 'hidden';
	}
/* IE 5.5 and below */
} else {
	var layerSwitch = 'document.all';
	var formSwitch = 'document.all';
	var flgNestedForm = false;
	var openBracketSwitch = '["';
	var closeLayerBracketSwitch = '"]';
	var closeFormBracketSwitch = '"]';
	var styleSwitch = '.style';
	var showSwitch = 'visible';
	var hideSwitch = 'hidden';
}

/* This function returns a string representing the object for the layer passed in.
	Use the eval() function on this string to get the layer object. */
function getLayer(layerName) {
	return layerSwitch + openBracketSwitch + layerName + closeLayerBracketSwitch;
}

/* This function returns a string representing the object for the form passed in.
	Use the eval() function on this string to get the form object. */
function getForm(formName) {
	return formSwitch + openBracketSwitch + formName + closeFormBracketSwitch;
}

/* This function returns a string representing the object for a form(formName) nested in a layer(layerName).
	Use the eval() function on this string to get the form object. */
function getNestedForm(layerName, formName) {
	if (!flgNestedForm) {
		return getForm(formName);
	} else {
		return getLayer(layerName) + '.' + getForm(formName);
	}
}
// -->