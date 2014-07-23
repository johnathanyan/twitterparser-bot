var storage = chrome.storage.local;

var name;
var email;
var tel;
var address;
var zip;
var city;
var state = 37;
var number;
var month;
var yr;
var cvv;

storage.get("_name", function(result){name = result._name});
storage.get("_email", function(result){email = result._email});
storage.get("_tel", function(result){tel = result._tel});
storage.get("_address", function(result){address = result._address});
storage.get("_zip", function(result){zip = result._zip});
storage.get("_city", function(result){city = result._city});
//storage.get("_state", function(result){state = result._state});
storage.get("_number", function(result){number = result._number});
storage.get("_month", function(result){month = result._month});
storage.get("_year", function(result){yr = result._year});
storage.get("_cvv", function(result){cvv = result._cvv});

function enter(){
	document.getElementsByName("order[billing_name]")[0].value = name;
	document.getElementsByName("order[email]")[0].value = email;
	document.getElementsByName("order[tel]")[0].value = tel;
	document.getElementsByName("order[billing_address]")[0].value = address;
	document.getElementsByName("order[billing_zip]")[0].value = zip;
	document.getElementsByName("order[billing_city]")[0].value = city;
	document.getElementById("order_billing_state").selectedIndex = state
	document.getElementsByName("credit_card[number]")[0].value = number;
	document.getElementById("credit_card_month").selectedIndex = parseInt(month) - 1;
	document.getElementById("credit_card_year").selectedIndex = parseInt(yr)-14;
	document.getElementsByName("credit_card[verification_value]")[0].value = cvv;
	document.getElementsByClassName("iCheck-helper")[1].click();
}

setTimeout("enter()",500);
