var storage = chrome.storage.local;
var size;
storage.get("_size", function(result){size = result._size});
var amount = 1;
var cartClicked = 0;

function addToCart() {
	var sizeList = document.getElementsByName("skuAndSize")[0];
	
	/* default qty is 1, will implement change in quantity if needed
	function setQuantity() {
		document.getElementsByName("qty")[0].selectedIndex = amount-1;
	*/

	function setSize(){
		for (var i=0; i < sizeList.length; i++){
			if (sizeList.options[i].text == size){
				document.getElementsByName("skuAndSize")[0].selectedIndex = i;
			}
		}
	}

	function cartClick(){
		window.location.href = "https://secure-store.nike.com/us/checkout/html/paypal_access.jsp?isExpress=true";
	}

	if (sizeList != undefined) {
		setSize();
		document.getElementsByClassName("add-to-cart nsg-button--nike-orange")[0].click();
		//document.getElementsByClassName("exp-onenikenav-cartcount")[0].click();
	}

	//cartClick();

}

setTimeout("addToCart()",250);