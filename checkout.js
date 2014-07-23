var name = "Testing Bot";
var email = "testing@gmail.com";
var tel = "9999999999";
var address = "217-03 48th Avenue"
var zip = "11364"
var city = "Bayside"
var state = 37
var number = "919191919191919crip"
var month = 11
var yr = 16
var cvv = "999"

document.getElementsByName("order[billing_name]")[0].value = name;
document.getElementsByName("order[email]")[0].value = email;
document.getElementsByName("order[tel]")[0].value = tel;
document.getElementsByName("order[billing_address]")[0].value = address;
document.getElementsByName("order[billing_zip]")[0].value = zip;
document.getElementsByName("order[billing_city]")[0].value = city;
document.getElementById("order_billing_state").selectedIndex = state
document.getElementsByName("credit_card[number]")[0].value = number;
document.getElementById("credit_card_month").selectedIndex = month;
document.getElementById("credit_card_year").selectedIndex = yr-14;
document.getElementById("number_v").value = cvv;
document.getElementsByClassName("iCheck-helper")[1].click();