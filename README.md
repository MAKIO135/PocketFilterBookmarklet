PocketFilterBookmarklet
=======================

Adding multiple tags filter to getpocket.com with a bookmarklet

Supports **OR** and **AND** filters:<br>
OR filter: Display items with at least one of the filtering tags<br>
AND filter: Display items with at least all the filtering tags

To install the bookmarklet select the following line of code, drag'n drop it to your favorites and rename it "PocketFilter":
 ```javascript
javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('src','https://raw.github.com/MAKIO135/PocketFilterBookmarklet/master/pocketfilter.js');document.body.appendChild(e)})())
 ```

 
 
###Notes:
The bookmarklet will only work with [Pocket List View](http://getpocket.com/a/queue/list/) otherwise it will redirect you there.<br>
The bookmarklet will only filter loaded links, if you want to filter all your links, load them all before filtering.<br>
To display all your links back after filtering once, simply clear the input form and click the 'Filter tags' button.<br>
<hr>
And if you like this, you should probably check my [Massive Pocket Uploader](http://makio135.com/mpu/)
