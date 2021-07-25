function toggleBucketList() {
    var bucketBox = document.getElementById("bucket-list");

    bucketBox.classList.toggle('cover');
    bucketBox.children[1].classList.toggle('invisible');    

    bucketBox.classList.toggle('closed');
    bucketBox.classList.toggle('open');

    // if (bucketBox.classList.contains("closed")) {
    //     moveListItems();
    // }
 }

// let listItem = document.getElementsByClassName('fake-svg');

// listItem.onclick = checkOff(this.id);

function checkOff(item) {
	let listItem = document.getElementById(item);
	let parent = listItem.parentNode;

	parent.children[0].classList.toggle('invisible');
	parent.children[1].classList.toggle('invisible');
}

function captureListItem() {
    var text = document.getElementById("enter-item").value;
    makeListItem(text);
}

function carouselSuggest(imgId) {
	var carouselImg = document.getElementById(imgId);
	var parent = carouselImg.parentNode;

	makeListItem(parent.children[1].innerHTML);
}
var itemsListed = 4;

function makeListItem(textInput) {
// function makeListItem() {
    var list = document.getElementById("scrollable");

    var div = document.createElement("div");
    var p = document.createElement("p");
	var a = document.createElement("a");
    var svg1 = document.createElement("img");
	var svg2 = document.createElement("img");

    svg1.src = '/static/draw/images/square.svg';
	svg2.src = '/static/draw/images/check-square-fill.svg';
    // var svg = {
    //     filePath: '/static/draw/images/square.svg'
    // }
    var textNode = document.createTextNode(String(textInput));

	var id = "item-" + String(itemsListed);

    div.classList.toggle("list-item");
    svg1.classList.toggle("fake-svg");
	svg1.id = id;
	
	a.setAttribute("href", "journal");
	svg1.setAttribute("onclick", "checkOff(this.id)");

	itemsListed++;
	svg2.classList.toggle("fake-svg");
	svg2.classList.toggle("invisible");

	

	// svg1.addEventListener("click", checkOff(id));

	// add event handler???

    p.appendChild(textNode);
	a.appendChild(svg1);
	div.appendChild(svg2);
    div.appendChild(a);
    div.appendChild(p);

    // list.appendChild(div);
    list.insertBefore(div, list.childNodes[6]);
}

// function moveListItems() {

// }

//  reorder func

// cross out & move func




// carousel stuff; ref fr WDD Lab 9
let prevdiv = document.getElementById("div-previous");
let nextdiv = document.getElementById("div-next");
let imgCards = document.getElementById("carousel-row");

let imageNum = 0;

function showNextImage() {
	imgCards.children[imageNum].classList.toggle('invisible');
	imageNum ++;
	checkControls();
}

nextdiv.onclick = showNextImage;

function showPrevImage() {
	imageNum--;
	imgCards.children[imageNum].classList.toggle('invisible');
	checkControls();
}

prevdiv.onclick = showPrevImage;

let totalImages = document.getElementsByClassName("carousel-card").length;

function checkControls() {
	if (imageNum === 0) {
		prevdiv.classList.add("hidden");
	}
	else if (prevdiv.classList.contains("hidden")) {
		prevdiv.classList.remove("hidden");
	}
	if (imageNum === (totalImages) - 1) {
		nextdiv.classList.add("hidden");
	}
	else if (nextdiv.classList.contains("hidden")) {
		nextdiv.classList.remove("hidden");
	}
}
// https://stackoverflow.com/questions/30231055/how-to-make-a-horizontally-scrolling-panel-or-carousel
// https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html
