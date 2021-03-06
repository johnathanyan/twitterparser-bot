var storage = chrome.storage.local;
var size;
storage.get("_size", function(result){size = result._size});
var sizeAvailable = 0;
var once = false;
var item;
storage.get("_item", function(result){item = result._item});

function getImagesByAlt(alt) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alt) {
            images.push(allImages[i]);
        }
    }
    return images;
}

function addToCart() {

	var sizeList = document.getElementsByName("size")[0];
	
	getImagesByAlt(item)[0].click();
	if (once == false){
		once = true;
		setTimeout("location.reload()", 600);
	}

	function setSize(){
		for (var i=0; i < sizeList.length; i++){
			if (sizeList.options[i].text == size){
				document.getElementsByName("size")[0].selectedIndex = i;
				sizeAvailable = 1;
			}
		}
	}

	if (sizeList != undefined) {
		setSize();
		if (sizeAvailable == 1){
			document.getElementsByName("commit")[0].click();
			setTimeout("document.getElementsByClassName('button checkout')[0].click()", 200);
		}
	}

}

setTimeout("addToCart()",500);

