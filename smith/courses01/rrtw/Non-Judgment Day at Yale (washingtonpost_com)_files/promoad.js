// promoad.js
// This javascript simply picks a random link and image and displays them
// Call Marcos (x2950) with questions
var localadImages = new promoad_makeArray(
// To add an image, put it in the list below.
// Make sure the image location:
// 1. Is surrounded by single quotes;
// 2. Doesn't contain single quotes within its name
// 3. Begins with www (The akamai string, which includes the 'http' will be automatically applied)
// Also make sure that images are separated by commas (don't put a comma after the last image name, though)

'www.washingtonpost.com/wp-adv/advertising/aawar.gif'



);

var localadUrls = new promoad_makeArray(
// To add a URL, put it in the list below. Make sure it is in the same location as the appropriate image.
// For example, if the image is listed second in the above list, its URL must be second in this list.
// Make sure the URL:
// 1. Is surrounded by single quotes;
// 2. Doesn't contain single quotes within its name
// 3. Begins with http:
// Also make sure that URLs are separated by commas (don't put a comma after the last image name, though)

'http://www.washingtonpost.com/newsletters'




);

var nationaladImages = new promoad_makeArray(
// To add an image, put it in the list below.
// Make sure the image location:
// 1. Is surrounded by single quotes;
// 2. Doesn't contain single quotes within its name
// 3. Begins with www (The akamai string, which includes the 'http' will be automatically applied)
// Also make sure that images are separated by commas (don't put a comma after the last image name, though)


'www.washingtonpost.com/wp-adv/advertisers/publish/images/pickthepros.gif',
'www.washingtonpost.com/wp-adv/advertisers/archives.gif',
'www.washingtonpost.com/wp-adv/advertisers/archivesgreen.gif',
'www.washingtonpost.com/wp-adv/advertisers/archivepurple.gif',
'www.washingtonpost.com/wp-adv/advertisers/usairways_promoboxv.gif'





);

var nationaladUrls = new promoad_makeArray(
// To add a URL, put it in the list below. Make sure it is in the same location as the appropriate image.
// For example, if the image is listed second in the above list, its URL must be second in this list.
// Make sure the URL:
// 1. Is surrounded by single quotes;
// 2. Doesn't contain single quotes within its name
// 3. Begins with http:
// Also make sure that URLs are separated by commas (don't put a comma after the last image name, though)

'http://www.washingtonpost.com/wp-adv/marketing/pickpros/contest.html',
'http://www.washingtonpost.com/wp-adv/archives/front.htm',
'http://www.washingtonpost.com/wp-adv/archives/front.htm',
'http://www.washingtonpost.com/wp-adv/archives/front.htm',
'http://www.washingtonpost.com/ac2/wp-dyn?node=personalization/mywp/proxy&destination=contest&amp;contestId=2524'
);




// No need to change anything below here.
if (promoad_national)
{
var rNum = Math.floor(Math.random() * nationaladImages.length);
document.writeln('<A HREF="'+nationaladUrls[rNum]+'"><IMG SRC="http://a188.g.akamaitech.net/f/188/920/1d/'+nationaladImages[rNum]+'" WIDTH="105" HEIGHT="60" ALT="Promotion" BORDER="0"></A>');
}
else
{
var rNum = Math.floor(Math.random() * localadImages.length);
document.writeln('<A HREF="'+localadUrls[rNum]+'"><IMG SRC="http://a188.g.akamaitech.net/f/188/920/1d/'+localadImages[rNum]+'" WIDTH="105" HEIGHT="60" ALT="Promotion" BORDER="0"></A>');
}


function promoad_makeArray(){
	for (var count = 0; count < promoad_makeArray.arguments.length; count++)
		this[count] = promoad_makeArray.arguments[count];
	this.length = count;
}
