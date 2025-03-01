let chair = document.getElementById("chair");
let sofa = document.getElementById("sofa");
let chairButton = document.getElementsByClassName("chairb");
let sofaButton = document.getElementsByClassName("sofab")

chairButton[0].onclick = function() {
    for (button of chairButton) {
        button.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("cOne").innerHTML = "Arlo Chair";
    document.getElementById("cTwo").innerHTML = "Brix Chair";
    document.getElementById("cThree").innerHTML = "Caden Chair";
    document.getElementById("cFour").innerHTML = "Cora Recliner";
    document.getElementById("cFive").innerHTML = "Elara Seat";
    chair.src = "images/chairs/Arlo Chair.jpg ";
    chairOne.src = "images/chairs/Brix Chair.jpg ";
    chairTwo.src = "images/chairs/Caden Chair.jpg ";
    chairThree.src = "images/chairs/Cora Recliner.jpg ";
    chairFour.src = "images/chairs/Elara Seat.jpg ";
}
chairButton[1].onclick = function() {
    for (button of chairButton) {
        button.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("cOne").innerHTML = "Finn Chair";
    document.getElementById("cTwo").innerHTML = "Harper Chair";
    document.getElementById("cThree").innerHTML = "Haven Chair";
    document.getElementById("cFour").innerHTML = "Juno Seat";
    document.getElementById("cFive").innerHTML = "Lumen Lounge";
    chair.src = "images/chairs/Finn Chair.jpg ";
    chairOne.src = "images/chairs/Harper Chair.jpg ";
    chairTwo.src = "images/chairs/Haven Chair.jpg ";
    chairThree.src = "images/chairs/Juno Seat.jpg ";
    chairFour.src = "images/chairs/Lumen Lounge.jpg ";
}
chairButton[2].onclick = function() {
    for (button of chairButton) {
        button.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("cOne").innerHTML = "LuxeX Seat";
    document.getElementById("cTwo").innerHTML = "Milo Lounger";
    document.getElementById("cThree").innerHTML = "Nero Seat";
    document.getElementById("cFour").innerHTML = "Nova Recliner";
    document.getElementById("cFive").innerHTML = "Ryder Chair";
    chair.src = "images/chairs/LuxeX Seat.jpg ";
    chairOne.src = "images/chairs/Milo Lounger.jpg ";
    chairTwo.src = "images/chairs/Nero Seat.jpg ";
    chairThree.src = "images/chairs/Nova Recliner.jpg ";
    chairFour.src = "images/chairs/Ryder Chair.jpg ";
}
chairButton[3].onclick = function() {
    for (button of chairButton) {
        button.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("cOne").innerHTML = "Sienna Recliner";
    document.getElementById("cTwo").innerHTML = "Tivoli Bench";
    document.getElementById("cThree").innerHTML = "Vera Lounge";
    document.getElementById("cFour").innerHTML = "Vero Lounge";
    document.getElementById("cFive").innerHTML = "Zara Chair";
    chair.src = "images/chairs/Sienna Recliner.jpg ";
    chairOne.src = "images/chairs/Tivoli Bench.jpg ";
    chairTwo.src = "images/chairs/Vera Lounge.jpg ";
    chairThree.src = "images/chairs/Vero Lounge.jpg ";
    chairFour.src = "images/chairs/Zara Chair.jpg ";
}

// Sofa
sofaButton[0].onclick = function () {
    for (sButton of sofaButton) {
        sButton.classList.remove("active");
    }
    this.classList.add("active");
    sofa.src = "images/sofa/Astra Sofa.jpg"; 
    sofaOne.src = "images/sofa/Bliss Sofa.jpg"; 
    sofaTwo.src = "images/sofa/Brix Comfort.jpg"; 
    sofaThree.src = "images/sofa/Cadenza Couch.jpg"; 
    sofaFour.src = "images/sofa/Cora Sectional.jpg"; 
}
sofaButton[1].onclick = function () {
    for (sButton of sofaButton) {
        sButton.classList.remove("active");
    }
    this.classList.add("active");
    sofa.src = "images/sofa/Elysian Sofa.jpg"; 
    sofaOne.src = "images/sofa/Ember Recliner.jpg"; 
    sofaTwo.src = "images/sofa/Harper Lounge.jpg"; 
    sofaThree.src = "images/sofa/Haven Lounge.jpg"; 
    sofaFour.src = "images/sofa/LuxeRest Couch.jpg"; 
}
sofaButton[2].onclick = function () {
    for (sButton of sofaButton) {
        sButton.classList.remove("active");
    }
    this.classList.add("active");
    sofa.src = "images/sofa/Marbella Lounge.jpg"; 
    sofaOne.src = "images/sofa/Nova Comfort.jpg"; 
    sofaTwo.src = "images/sofa/Opal Sectional.jpg"; 
    sofaThree.src = "images/sofa/Serenity Couch.jpg"; 
    sofaFour.src = "images/sofa/Solace Sofa.jpg"; 
}
sofaButton[3].onclick = function () {
    for (sButton of sofaButton) {
        sButton.classList.remove("active");
    }
    this.classList.add("active");
    sofa.src = "images/sofa/Tivoli Rest.jpg"; 
    sofaOne.src = "images/sofa/Velvet Haven.jpg"; 
    sofaTwo.src = "images/sofa/Vera Sofa.jpg"; 
    sofaThree.src = "images/sofa/Willow Seat.jpg"; 
    sofaFour.src = "images/sofa/Zenith Sofa.jpg"; 
}
