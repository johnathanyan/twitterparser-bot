var size = "Medium";
var sizeAvailable = 0;
var once = false;

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
	
	getImagesByAlt("Mosh Tee")[0].click();
	if (once == false){
		setTimeout("location.reload()", 200);
		once = true;
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

setTimeout("addToCart()",180);

