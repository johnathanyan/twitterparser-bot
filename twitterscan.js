var storage = chrome.storage.local;
var shoeName;
storage.get("_item", function(result){shoeName = result._item});
var nikestore = "nikestore";
var closeFlag = "no";
var tFunction = "twitterScan()";
var tweet = new Array();
var tweetName = new Array();

function twitterScan() {
	
	for (var i = 0; i < 4; i++) {
		tweetName[i] = document.getElementsByClassName("fullname js-action-profile-name show-popup-with-id")[0].innerHTML;
		tweet[i] = document.getElementsByClassName("js-tweet-text")[i].innerHTML;
		
	}


	//if (document.getElementsByClassName("fullname js-action-profile-name show-popup-with-id")[0].innerHTML;

	if (tweet[0].match(shoeName) == shoeName) {
		document.getElementsByClassName("twitter-timeline-link")[0].click();
		tFunction = "csup";
		shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		
	} 

	else if (tweet[1].match(shoeName) == shoeName) {
		document.getElementsByClassName("twitter-timeline-link")[1].click();
		tFunction = "csup";
		shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		
	}

	else if (tweet[2].match(shoeName) == shoeName) {
		document.getElementsByClassName("twitter-timeline-link")[2].click();
		tFunction = "csup";
		shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		
	}


	else if (tweet[3].match(shoeName) == shoeName) {
		document.getElementsByClassName("twitter-timeline-link")[3].click();
		tFunction = "csup";
		shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		
	}
	

	else {
		location.reload(true);
	}
	
	setTimeout(tFunction, 700);

	
}

setTimeout(tFunction, 700);

//setInterval("refreshPage()", 3000);
//setTimeout("twitterScan()", 100);
//setInterval(tFunction, 700);




