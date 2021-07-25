function toggleBucketList() {
    var bucketBox = document.getElementById("bucket-list");

    bucketBox.classList.toggle('cover');
    bucketBox.children[1].classList.toggle('hidden');    

    bucketBox.classList.toggle('closed');
    bucketBox.classList.toggle('open');

    // if (bucketBox.classList.contains("closed")) {
    //     moveListItems();
    // }
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

function makeListItem(textInput) {
// function makeListItem() {
    var list = document.getElementById("scrollable");

    var div = document.createElement("div");
    var p = document.createElement("p");
    var svg = document.createElement("img");

    svg.src = '/static/draw/images/square.svg'
    // var svg = {
    //     filePath: '/static/draw/images/square.svg'
    // }
    var textNode = document.createTextNode(String(textInput));

    div.classList.toggle("list-item");
    svg.classList.toggle("fake-svg");

    p.appendChild(textNode);
    div.appendChild(svg);
    div.appendChild(p);

    // list.appendChild(div);
    list.insertBefore(div, list.childNodes[4]);
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
