// Saves options to chrome.storage
var storage = chrome.storage.local;

function save_options() {
  var name = document.getElementById('name').value;
  var size = document.getElementById('size').value;
  var email = document.getElementById('email').value;
  var tel = document.getElementById('tel').value;
  var address = document.getElementById('address').value;
  var zip = document.getElementById('zip').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var number = document.getElementById('number').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('yr').value;
  var cvv = document.getElementById('cvv').value;
  var item = document.getElementById('item').value;
  
  storage.set({"_name": name});
  storage.set({"_size": size});
  storage.set({"_email": email});
  storage.set({"_tel": tel});
  storage.set({"_address": address});
  storage.set({"_zip": zip});
  storage.set({"_city": city});
  storage.set({"_state": state});
  storage.set({"_number": number});
  storage.set({"_month": month});
  storage.set({"_year": year});
  storage.set({"_cvv": cvv});
  storage.set({"_item": item});

  var status = document.getElementById('status');
  status.innerHTML = '<i><font color="#FFFFFF">Options saved.';
  setTimeout(function() {
      status.innerHTML = '';
    }, 1800);
}

document.getElementById('save').addEventListener('click',
    save_options);

