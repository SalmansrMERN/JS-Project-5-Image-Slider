var photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg"]

var myImage = document.querySelector("img");

var count = 0;

function nxtId() {
    count++;
    if (count >= 3) {
        count = 0;
        myImage.src = photos[count];
    } else {
        myImage.src = photos[count];
    }

}

function prevId() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        myImage.src = photos[count];

    } else {
        myImage.src = photos[count];
    }

}