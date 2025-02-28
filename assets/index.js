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


// First Product
checkb[0].onclick = function() {
    for (botton of checkb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pOne").innerHTML = "Caden Chair";
    fiProduct.src = "images/chairs/Caden Chair.jpg";
}
checkb[1].onclick = function() {
    for (botton of checkb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pOne").innerHTML = "Aurora Lamp";
    fiProduct.src = "images/lamp/Aurora Lamp.jpg";
}
checkb[2].onclick = function() {
    for (botton of checkb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pOne").innerHTML = "Vero Lounge";
    fiProduct.src = "images/chairs/Vero Lounge.jpg";
}
checkb[3].onclick = function() {
    for (botton of checkb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pOne").innerHTML = "Astra Sofa";
    fiProduct.src = "images/sofa/Astra Sofa.jpg";
}
checkb[4].onclick = function() {
    for (botton of checkb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pOne").innerHTML = "Arlo Chair";
    fiProduct.src = "images/chairs/Arlo Chair.jpg";
}
// Second Product
scheck[0].onclick = function() {
    for (botton of scheck) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pTwo").innerHTML = "Brix Chair";
    sProduct.src = "images/chairs/Brix Chair.jpg";
}
scheck[1].onclick = function() {
    for (botton of scheck) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pTwo").innerHTML = "Brix Frame";
    sProduct.src = "images/decor/Brix Frame.jpg";
}
scheck[2].onclick = function() {
    for (botton of scheck) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pTwo").innerHTML = "Caden Lamp";
    sProduct.src = "images/lamp/Caden Lamp.jpg";
}
scheck[3].onclick = function() {
    for (botton of scheck) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pTwo").innerHTML = "Le Pillow";
    sProduct.src = "images/decor/Le Pillow.jpg";
}
scheck[4].onclick = function() {
    for (botton of scheck) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pTwo").innerHTML = "Bliss Sofa";
    sProduct.src = "images/sofa/Bliss Sofa.jpg";
}
// Third Product
tcheckb[0].onclick = function() {
    for (botton of tcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pThree").innerHTML = "Elara Seat";
    tProduct.src = "images/chairs/Elara Seat.jpg";
}
tcheckb[1].onclick = function() {
    for (botton of tcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pThree").innerHTML = "Cadenza Couch";
    tProduct.src = "images/sofa/Cadenza Couch.jpg";
}
tcheckb[2].onclick = function() {
    for (botton of tcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pThree").innerHTML = "Cora Recliner";
    tProduct.src = "images/chairs/Cora Recliner.jpg";
}
tcheckb[3].onclick = function() {
    for (botton of tcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pThree").innerHTML = "G B Table";
    tProduct.src = "images/decor/G B Table.jpg";
}
tcheckb[4].onclick = function() {
    for (botton of tcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pThree").innerHTML = "Bliss Light";
    tProduct.src = "images/lamp/Bliss Light.jpg";
}
// Fourth Product
fcheckb[0].onclick = function() {
    for (botton of fcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFour").innerHTML = "Harper Chair"
    fProduct.src = "images/chairs/Harper Chair.jpg";
}
fcheckb[1].onclick = function() {
    for (botton of fcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFour").innerHTML = "Artifacts"
    fProduct.src = "images/decor/Artifacts.jpg";
}
fcheckb[2].onclick = function() {
    for (botton of fcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFour").innerHTML = "Eclipse Lamp"
    fProduct.src = "images/lamp/Eclipse Lamp.jpg";
}
fcheckb[3].onclick = function() {
    for (botton of fcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFour").innerHTML = "Finn Chair"
    fProduct.src = "images/chairs/Finn Chair.jpg";
}
fcheckb[4].onclick = function() {
    for (botton of fcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFour").innerHTML = "Brix Comfort"
    fProduct.src = "images/sofa/Brix Comfort.jpg";
}
// Fifth Product
ftcheckb[0].onclick = function() {
    for (botton of ftcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFive").innerHTML = "Juno Seat"
    ftProduct.src = "images/chairs/Juno Seat.jpg";
}
ftcheckb[1].onclick = function() {
    for (botton of ftcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFive").innerHTML = "JCosmo Light"
    ftProduct.src = "images/lamp/Cosmo Light.jpg";
}
ftcheckb[2].onclick = function() {
    for (botton of ftcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFive").innerHTML = "Cora Sectional"
    ftProduct.src = "images/sofa/Cora Sectional.jpg";
}
ftcheckb[3].onclick = function() {
    for (botton of ftcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFive").innerHTML = "Haven Chair"
    ftProduct.src = "images/chairs/Haven Chair.jpg";
}
ftcheckb[4].onclick = function() {
    for (botton of ftcheckb) {
        botton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("pFive").innerHTML = "Bubble Mirro"
    ftProduct.src = "images/decor/Bubble Mirror.jpg";
}