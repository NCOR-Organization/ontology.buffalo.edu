/*
 * This is the popup campaign control file
 * This file defines popup campaigns. It relies on JavaScript objects defined in popupCampaignClasses.js
 * Before including this on a page, you must:
 * 1. Define a variable called thisNode, which specifies the node to which the page belongs;
 * 2. Import popupCampaignClasses.js
 * The first campaign defined in this file has comments describing what the following line[s] do. 
 */

// THIS DEFINES THE NUMBER OF POPUP CAMPAIGNS A USER CAN GET IN A SESSION AND A WEEK. 
// It applies to all campaigns and shouldn't need to be changed on a campaign-by-campaign basis
var popupSessionLimit = 1;   // Maximum number of popups user will see in a session
var popupIntensityLimit = 2; // Maximum number of popups user will see in a week

// STEP ONE: Define your campaign
// You must create a new Campaign object
var CRM_March = new Campaign(); 


// You must assign a unique name to the campaign
CRM_March.setName('CRM_March'); 


// You may define a time frame for the launch window
CRM_March.setTime(new Date(2002,1,1,10,0,0),new Date(2009,1,21,0,0,0)); 


// You may target to REGISTERED and/or NOT_REGISTERED users; default: NOT_REGISTERED
//CRM_March.setTarget(REGISTERED + NOT_REGISTERED); 
// You may set the number of times per week this campaign can appear to a users (default: once) 
//CRM_March.setLimit(5); 
// You may change the base that is applied to the value of setLimit (default: 7 days)
//CRM_March.setFrequency(2 * pcm_DAYS); 
// You may define the dimensions (x,y) of the popup window, default is 300x400 (defined in popupCampaignClasses.js)
CRM_March.setDimensions(300,340); 


CRM_March.setMod(1);


// You MUST create NodeToUrlMap objects for each node assignment. 
// You can apply the assignment to the FRONT, ARTICLE
// You can make the assignment EXPLICITY (applies only to that node) or IMPLICIT (applies to that node and its children)
CRM_March.mapNodeToUrl( new NodeToUrlMap('sports','http://www.washingtonpost.com/wp-srv/popjs/sports.htm', FRONT + EXPLICIT) );
// CRM_March.mapNodeToUrl( new NodeToUrlMap('metro','http://www.washingtonpost.com/wp-srv/popjs/metro.htm', FRONT + EXPLICIT) );
CRM_March.mapNodeToUrl( new NodeToUrlMap('digest','http://www.washingtonpost.com/wp-srv/popjs/digest.htm', FRONT + EXPLICIT) );
CRM_March.mapNodeToUrl( new NodeToUrlMap('politics','http://www.washingtonpost.com/wp-srv/popjs/politics.htm', ARTICLE + IMPLICIT) );


//CRM_March.mapNodeToUrl( new NodeToUrlMap('nation/specials/attacked','http://www.washingtonpost.com/wp-srv/popjs/america_attacked.htm', ARTICLE + IMPLICIT) );

//CRM_March.mapNodeToUrl( new NodeToUrlMap('Entertainment_front','http://www.washingtonpost.com/wp-srv/popjs/entertainment.htm', FRONT + EXPLICIT) );




// STEP TWO: Add your campaign to the campaignList
campaignList = new Array();
campaignList[0] = CRM_March;


deliverCampaign(campaignList);
