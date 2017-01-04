# TwitterAssist  
Download ":orig"-version twitter images with the press of a key.  
  
Run this JavaScript in your browser when viewing a twitter page to add the ability to do the following process  
(1) mouse your cursor over an image  
(2) click the user-specified key on your keyboard  
(3) the image has been downloaded to your default downloads folder, at the ":orig" quality, as specified by twitter  
  
This code also works to download other images, but no special actions will take place. In other words, you'll probably be downloading a poor-quality image because twitter initially only shows you lower-quality versions of the original.  
  
You can also create a bookmark with the URL/link being the twitterAssistBookmarklet.txt text. Then, whenever you click on the bookmark, it will run the script. Bookmarks that run JavaScript instead of going to a webpage are called bookmarklets.  
  
Use case  
Downloading higher-quality images on twitter is difficult and time-consuming. Pretty much every image that you see on twitter is a downgraded version, to better fit its display size - if an image is tiny on-screen, then they use a tiny version of the image - you shouldn't be able to tell the difference. --but when I go to download images, I have to jump through some hoops to get to the original versions. Twitter is willing to show you all the way to ":large"-version images, which you can just right-click download. This is bad, but not that bad. If the tweet has multiple images though, you'll need to use your browser's HTML inspector, do some clicking, and open the link you found in a new page to download it. Beyond that, every higher-quality twitter image has "-large" or "-orig" appended it the end of its name, so you have to rename each file you download. This is difficult. Instead, this script lets you just hover over an image, hit a keyboard key, and it does all that messy work for you. It takes the link and makes it into an ":orig" version, then downloads it and cuts off the "-orig" from the filename.  
  
Everything that could go wrong, within reason  
• twitter could change the way they set up link names, breaking this script  