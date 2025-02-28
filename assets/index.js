var countDownDate = new Date("Mar 1, 2025 00:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

        }, 1000);

// For Products
let fiProduct = document.getElementById("fiProduct");
let sProduct = document.getElementById("sProduct");
let tProduct = document.getElementById("tProduct");
let fProduct = document.getElementById("fProduct");
let ftProduct = document.getElementById("ftProduct");
let checkb = document.getElementsByClassName("checkb");
let scheck = document.getElementsByClassName("scheckb");
let tcheckb = document.getElementsByClassName("tcheckb");
let fcheckb = document.getElementsByClassName("fcheckb");
let ftcheckb = document.getElementsByClassName("ftcheckb");
document.getElementById("one")

// First Product
checkb[0].onclick = function() {
    fiProduct.src = "images/chair 1.jpg";
}
checkb[1].onclick = function() {
    fiProduct.src = "images/lamp 1.jpg";
}
checkb[2].onclick = function() {
    fiProduct.src = "images/chair 2.jpg";
}
checkb[3].onclick = function() {
    fiProduct.src = "images/sofa 1.jpg";
}
checkb[4].onclick = function() {
    fiProduct.src = "images/chair 3.jpg";
}
// Second Product
scheck[0].onclick = function() {
    sProduct.src = "images/sofa 3.jpg";
}
scheck[1].onclick = function() {
    sProduct.src = "images/decor 5.jpg";
}
scheck[2].onclick = function() {
    sProduct.src = "images/lamp 2.jpg";
}
scheck[3].onclick = function() {
    sProduct.src = "images/decor 8.jpg";
}
scheck[4].onclick = function() {
    sProduct.src = "images/lamp 4.jpg";
}
// Third Product
tcheckb[0].onclick = function() {
    tProduct.src = "images/chair 8.jpg";
}
tcheckb[1].onclick = function() {
    tProduct.src = "images/sofa 5.jpg";
}
tcheckb[2].onclick = function() {
    tProduct.src = "images/chair 10.jpg";
}
tcheckb[3].onclick = function() {
    tProduct.src = "images/decor 10.jpg";
}
tcheckb[4].onclick = function() {
    tProduct.src = "images/lamp 10.jpg";
}
// Fourth Product
fcheckb[0].onclick = function() {
    fProduct.src = "images/chair 12.jpg";
}
fcheckb[1].onclick = function() {
    fProduct.src = "images/decor 13.jpg";
}
fcheckb[2].onclick = function() {
    fProduct.src = "images/lamp 14.jpg";
}
fcheckb[3].onclick = function() {
    fProduct.src = "images/chair 14.jpg";
}
fcheckb[4].onclick = function() {
    fProduct.src = "images/sofa 14.jpg";
}
// Fifth Product
ftcheckb[0].onclick = function() {
    ftProduct.src = "images/chair 16.jpg";
}
ftcheckb[1].onclick = function() {
    ftProduct.src = "images/lamp 17.jpg";
}
ftcheckb[2].onclick = function() {
    ftProduct.src = "images/sofa 18.jpg";
}
ftcheckb[3].onclick = function() {
    ftProduct.src = "images/chair 18.jpg";
}
ftcheckb[4].onclick = function() {
    ftProduct.src = "images/decor 18.jpg";
}