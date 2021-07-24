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
    list.insertBefore(div, list.childNodes[2]);
}

// function moveListItems() {

// }






//  reorder func

// cross out & move func