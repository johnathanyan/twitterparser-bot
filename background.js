
function openOrFocusOptionsPage() {
   var optionsUrl = chrome.extension.getURL('options.html'); 
   chrome.tabs.query({}, function(extensionTabs) {
      var found = false;
      for (var i=0; i < extensionTabs.length; i++) {
         if (optionsUrl == extensionTabs[i].url) {
            found = true;
            console.log("tab id: " + extensionTabs[i].id);
            chrome.tabs.update(extensionTabs[i].id, {"selected": true});
         }
      }
      if (found == false) {
          chrome.tabs.create({url: "options.html"});
      }
   });
   
}
chrome.extension.onConnect.addListener(function(port) {
  var tab = port.sender.tab;
  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(info) {
    var max_length = 1024;
    if (info.selection.length > max_length)
      info.selection = info.selection.substring(0, max_length);
      openOrFocusOptionsPage();
  });
});

function resetFields(){
  storage.get("_name", function(result){document.getElementById('name').value = result._name});
  storage.get("_size", function(result){document.getElementById('size').value = result._size});
  storage.get("_email", function(result){document.getElementById('email').value = result._email});
  storage.get("_tel", function(result){document.getElementById('tel').value = result._tel});
  storage.get("_address", function(result){document.getElementById('address').value = result._address});
  storage.get("_zip", function(result){document.getElementById('zip').value = result._zip});
  storage.get("_city", function(result){document.getElementById('city').value = result._city});
  //storage.get("_state", function(result){state = result._state});
  document.getElementById('state').value = "NY";
  storage.get("_number", function(result){document.getElementById('number').value = result._number});
  storage.get("_month", function(result){document.getElementById('month').value = result._month});
  storage.get("_year", function(result){document.getElementById('yr').value = result._year});
  storage.get("_cvv", function(result){document.getElementById('cvv').value = result._cvv});
  storage.get("_item", function(result){document.getElementById('item').value = result._item});
}

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
   openOrFocusOptionsPage();
   resetFields();
});
