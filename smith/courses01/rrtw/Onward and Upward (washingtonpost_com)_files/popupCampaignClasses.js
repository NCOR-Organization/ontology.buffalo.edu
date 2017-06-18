/*
 * Popup Campaign Manager provides the objects and methods needed to control multiple popup campaigns
 * It is controlled by popupCampaigns.js; by itself it does nothing that you'll see on a page.
 * It needs one preset variable: thisNode must be set to the node to which the page belongs before importing this javascript source.
 */

// CONSTANTS
// REGISTERED|NOT_REGISTERED identify whether the user is defined (based on the WPATC cookie).
// To define both user groups, use addition (REGISTERED + NOT_REGISTERED == all users)
var REGISTERED = 1;
var NOT_REGISTERED = 2;
 

// ARTICLE|FRONT|IMPLICIT|EXPLICIT define the types of pages to which a mapping applies.
// To combine several page types, use addition 
// (FRONT + ARTICLE + IMPLICIT == all section front and articles in this node and all its children)
var ARTICLE = 1;
var FRONT = 2;
var IMPLICIT = 4;
var EXPLICIT = 0;

// These constants make the time conversion to milliseconds easier. Take a number and multiply it by the appropriate constant
var pcm_DAYS = 24 * 60 * 60 * 1000;
var pcm_HOURS = 60 * 60 * 1000;
var pcm_MINUTES = 60 * 1000;
var pcm_now = new Date();

// The following constants are for internal use
var NA = '';

var SESSION = 0;
var CAMPAIGN_MANAGER = 1;
var INTENSITY = 2;
var SUBSCRIBED = 3;

var POPUP_WIDTH = 300;
var POPUP_HEIGHT = 400;

var COOKIE_NAME = new Array();
var COOKIE_VALUE = new Array();

COOKIE_NAME[SESSION] = 'wpni_session';
COOKIE_NAME[CAMPAIGN_MANAGER] = 'wpni_campaignmanager';
COOKIE_NAME[INTENSITY] = 'wpni_campaignintensity';
COOKIE_NAME[SUBSCRIBED] = 'WPATC';

var popupUrl = NA;
var pcm_node = thisNode; // thisNode must be defined in the file calling this js file
var isArticle = (location.href.indexOf("/articles/") != -1) ? true : false ;

// Extract cookies that are not campaign specific 
for (var count = 0; count < COOKIE_NAME.length; count++)
{
  var startAt = 0;
  if ( (startAt = document.cookie.indexOf(COOKIE_NAME[count])) != -1)
  {
    startAt += COOKIE_NAME[count].length + 1;
    var endAt = (document.cookie.indexOf(";", startAt) == -1) ? document.cookie.length : document.cookie.indexOf(";", startAt);
    COOKIE_VALUE[count] = document.cookie.substring(startAt, endAt);
  }
  else
  {
    COOKIE_VALUE[count] = NA;
  }
}

// Extract the campaign-specific cookie
function getCampaignCookie(cn)
{
  var c = NA;
  var temp = document.cookie;
  while (temp.indexOf(cn + ':') != -1) 
    temp = temp.substring(0, temp.indexOf(cn + ':')) 
         + temp.substring(temp.indexOf(cn + ':') + cn.length + 1);
  if (temp.indexOf(cn) != -1)
  {
    var startAt = temp.indexOf(cn) + cn.length + 1;
    var endAt = (temp.indexOf(';', startAt) == -1) ? temp.length : temp.indexOf(';', startAt);
    c = temp.substring(startAt, endAt);
  }
  return c;
}

// Try to deliver a campaign from an Array of campaigns (the Array is the argument to this function)
function deliverCampaign(campaign)
{
  // Abort if the user has exceeded the session limit (defined in popupCampaigns.js)
  if ( (COOKIE_VALUE[SESSION] != NA) && (parseInt(COOKIE_VALUE[SESSION]) >= popupSessionLimit) )
  {
    return;
  }
  
  // Abort if the user has exceeded the intensity limit (defined in popupCampaigns.js)
  if ( (COOKIE_VALUE[INTENSITY] != NA) && (parseInt(COOKIE_VALUE[INTENSITY]) >= popupIntensityLimit) )
  {
    return;
  }
  


  // Extract possible campaigns from the campaign list by passing each campaign through a bunch of filters
  var validCampaign = new Array();
  var validCampaignCount = 0;

  for (var count = 0; count < campaign.length; count++)
  {
    // Filter one: Check the window during which the campaign is valid
    if ( (campaign[count].timed == false) || ( (pcm_now > campaign[count].startTime) && ((pcm_now < campaign[count].endTime)) ) )
    {
      // Check target
      if (  ( ( (campaign[count].target & NOT_REGISTERED) == NOT_REGISTERED ) && (COOKIE_VALUE[SUBSCRIBED] == NA) )
         || ( ( (campaign[count].target & REGISTERED) == REGISTERED ) && (COOKIE_VALUE[SUBSCRIBED] != NA) )
         )
      {
        // Check to see if this campaign has surpassed its delivery limit
        var campaignCookie = getCampaignCookie(campaign[count].name);
        if (  (campaignCookie == NA) 
           || (parseInt(campaignCookie) < campaign[count].limit)
           )
        {
          // Determine if this node is valid for this campaign
          if (determinePopupUrl(campaign[count]) != NA)
          { 		  
            validCampaign[validCampaignCount++] = campaign[count];
          }
          else{
          }
        }
        else{
        }
      }
      else{
      }
    }
    else{
    }
  }

  // Abort if there are no valid campaigns
  if (validCampaignCount == 0) return;

  
  // Randomize the valid campaigns
  if (validCampaignCount > 1)
  {
    for (var count = 0; count < validCampaignCount; count++)
    {
      var newSpot = Math.floor(Math.random() * validCampaignCount);
      hold = validCampaign[newSpot];
      validCampaign[newSpot] = validCampaign[count];
      validCampaign[count] = hold;
    }
  }
  
  
  
  // Iterate through random list of campaigns, trying to deliver one
  for (var count = 0; count < validCampaignCount; count++)
  {
    var campaignCookie = getCampaignCookie(validCampaign[count].name);
    if ((campaignCookie == NA) || (parseInt(campaignCookie) < validCampaign[count].limit))
    {
      doPopup(validCampaign[count]);
      break;
    }
  }
}

function doPopup(campaign)
{
  // UPDATE COOKIES!
  if (COOKIE_VALUE[SESSION] == NA) COOKIE_VALUE[SESSION] = 1;
  else COOKIE_VALUE[SESSION]++;
  var campaignCookie = getCampaignCookie(campaign.name);
  if (campaignCookie == NA) campaignCookie = 1;
  else campaignCookie = parseInt(campaignCookie) + 1;
  if (COOKIE_VALUE[CAMPAIGN_MANAGER].indexOf(campaign.name + ":") != -1)
  {
    var startAt = COOKIE_VALUE[CAMPAIGN_MANAGER].indexOf(campaign.name + ":") + campaign.name.length + 1;
    var endAt = (COOKIE_VALUE[CAMPAIGN_MANAGER].indexOf("^", startAt) == -1) ? COOKIE_VALUE[CAMPAIGN_MANAGER].length : COOKIE_VALUE[CAMPAIGN_MANAGER].indexOf("^", startAt);
    var temp = parseInt(COOKIE_VALUE[CAMPAIGN_MANAGER].substring(startAt, endAt)) + 1;
    COOKIE_VALUE[CAMPAIGN_MANAGER] = COOKIE_VALUE[CAMPAIGN_MANAGER].substring(0,startAt) 
                                   + temp
                                   + COOKIE_VALUE[CAMPAIGN_MANAGER].substring(endAt);
  }
  else
  {
    COOKIE_VALUE[CAMPAIGN_MANAGER] += campaign.name + ":1^";
  }
  if (COOKIE_VALUE[INTENSITY] == NA) COOKIE_VALUE[INTENSITY] = 1;
  else COOKIE_VALUE[INTENSITY]++;

  // Determine expiration times for different cookies
  var campaignExpiration = new Date();
  var managerExpiration = new Date();
  var intensityExpiration = new Date();
  campaignExpiration.setTime(campaignExpiration.getTime() + (campaign.frequency));
  managerExpiration.setTime(managerExpiration.getTime() + (365 * pcm_DAYS) );
  intensityExpiration.setTime(intensityExpiration.getTime() + (7 * pcm_DAYS) );

  // Write cookies to browser
  document.cookie = COOKIE_NAME[SESSION] + "=" + COOKIE_VALUE[SESSION] + ";path=/";
  document.cookie = campaign.name + "=" + campaignCookie + ";expires=" + campaignExpiration.toGMTString() + ";path=/";
  document.cookie = COOKIE_NAME[CAMPAIGN_MANAGER] + "=" + COOKIE_VALUE[CAMPAIGN_MANAGER] + ";expires=" + managerExpiration.toGMTString() + ";path=/";
  document.cookie = COOKIE_NAME[INTENSITY] + "=" + COOKIE_VALUE[INTENSITY] + ";expires=" + intensityExpiration.toGMTString() + ";path=/";
 
  if (pcm_now.getSeconds()%campaign.mod == 0)
  {
  w = window.open(determinePopupUrl(campaign), '', 'width=' + campaign.width + ',height=' + campaign.height);
  }
  


}

function determinePopupUrl(campaign)
{
  var url = NA;
  for (var count = 0; count < campaign.nodeToUrlMapCount; count++)
  {
    var mapping = campaign.nodeToUrlMap[count];
    if ( ((mapping.applies & IMPLICIT) == IMPLICIT) && (pcm_node.indexOf(mapping.node) == 0) )
    {
      if ((((mapping.applies & ARTICLE) == ARTICLE) && (isArticle)) ||
          (((mapping.applies & FRONT) == FRONT) && (!isArticle))
         )
      {
        url = mapping.url;
      }
    }
    else if ( ((mapping.applies & EXPLICIT) == EXPLICIT) && (pcm_node == mapping.node) )
    {
      if ((((mapping.applies & ARTICLE) == ARTICLE) && (isArticle)) ||
          (((mapping.applies & FRONT) == FRONT) && (!isArticle))
         )
      {
        url = mapping.url;
        break;
      }
    }
  }
  return url;
}

// JAVASCRIPT OBJECTS and definitions of their methods
function Campaign()
{
  this.name = '';
  this.timed = false;
  this.startTime = null;
  this.endTime = null;
  this.nodeToUrlMap = new Array();
  this.nodeToUrlMapCount = 0;
  this.target = NOT_REGISTERED;
  this.limit = 1;
  this.frequency = 7 * pcm_DAYS;
  this.width = POPUP_WIDTH;
  this.height = POPUP_HEIGHT;
  this.mod = 1;
  
  this.setName = pcm_setName;
  this.setTime = pcm_setTime;
  this.setTarget = pcm_setTarget;
  this.setLimit = pcm_setLimit;
  this.setFrequency = pcm_setFrequency;
  this.mapNodeToUrl = pcm_mapNodeToUrl;
  this.setDimensions = pcm_setDimensions;
  this.setMod = pcm_setMod;

 
}

function NodeToUrlMap(n,u,a)
{
  this.node = n;
  this.url = u;
  this.applies = a;
}

function pcm_setDimensions(x,y)
{
  this.width = x;
  this.height = y;
}

function pcm_mapNodeToUrl(u)
{
  this.nodeToUrlMap[this.nodeToUrlMapCount++] = u;
}

function pcm_setName(n)
{
  this.name = n;
}

function pcm_setTime(s,e)
{
  this.startTime = s;
  this.endTime = e;
  this.timed = true;
}

function pcm_setTarget(t)
{
  this.target = t;
}

function pcm_setLimit(l)
{
  this.limit = l;
}

function pcm_setFrequency(f)
{
  this.frequency = f;
}

function pcm_setMod(m)
{
  this.mod = m;
}  

