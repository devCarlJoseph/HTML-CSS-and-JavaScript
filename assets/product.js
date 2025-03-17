let chair = document.getElementById("chair")
let sofa = document.getElementById("sofa")
let lamp = document.getElementById("lamp")
let decor = document.getElementById("decor")
let chairButton = document.getElementsByClassName("chairb")
let sofaButton = document.getElementsByClassName("sofab")
let lampButton = document.getElementsByClassName("lampb")
let decorButton = document.getElementsByClassName("decorb")

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
//sofa
sofaButton[0].onclick = function () {
    for (sButton of sofaButton) {
        sButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("sofaO").innerHTML = "Astra Sofa";
    document.getElementById("sofaT").innerHTML = "Bliss Sofa";
    document.getElementById("sofaTh").innerHTML = "Brix Comfort";
    document.getElementById("sofaF").innerHTML = "Cadenza Couch";
    document.getElementById("sofaFi").innerHTML = "Cora Sectional";
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
    document.getElementById("sofaO").innerHTML = "Elysian Sofa";
    document.getElementById("sofaT").innerHTML = "Ember Recliner";
    document.getElementById("sofaTh").innerHTML = "Harper Lounge";
    document.getElementById("sofaF").innerHTML = "Haven Lounge";
    document.getElementById("sofaFi").innerHTML = "LuexRest Couch";
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
    document.getElementById("sofaO").innerHTML = "Marbella Lounge";
    document.getElementById("sofaT").innerHTML = "Nova Comfort";
    document.getElementById("sofaTh").innerHTML = "Opal Sectional";
    document.getElementById("sofaF").innerHTML = "Serenity Couch";
    document.getElementById("sofaFi").innerHTML = "Solace Sofa";
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
    document.getElementById("sofaO").innerHTML = "Tivoli Rest";
    document.getElementById("sofaT").innerHTML = "Velvet Haven";
    document.getElementById("sofaTh").innerHTML = "Vera Sofa";
    document.getElementById("sofaF").innerHTML = "Willow Seat";
    document.getElementById("sofaFi").innerHTML = "Zenith Sofa";
    sofa.src = "images/sofa/Tivoli Rest.jpg"; 
    sofaOne.src = "images/sofa/Velvet Haven.jpg"; 
    sofaTwo.src = "images/sofa/Vera Sofa.jpg"; 
    sofaThree.src = "images/sofa/Willow Seat.jpg"; 
    sofaFour.src = "images/sofa/Zenith Sofa.jpg"; 
}
//lamp

lampButton[0].onclick = function () {
    for (lButton of lampButton) {
        lButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("lampO").innerHTML = "Aurora Lamp";
    document.getElementById("lampT").innerHTML = "Bliss Light";
    document.getElementById("lampTh").innerHTML = "Caden Lamp";
    document.getElementById("lampF").innerHTML = "Cosmo Light";
    document.getElementById("lampFi").innerHTML = "Eclipse Lamp";
    lamp.src = "images/lamp/Aurora Lamp.jpg";
    lampOne.src = "images/lamp/Bliss Light.jpg";
    lampTwo.src = "images/lamp/Caden Lamp.jpg";
    lampThree.src = "images/lamp/Cosmo Light.jpg";
    lampFour.src = "images/lamp/Eclipse Lamp.jpg";
}
lampButton[1].onclick = function () {
    for (lButton of lampButton) {
        lButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("lampO").innerHTML = "Eden Lamp";
    document.getElementById("lampT").innerHTML = "Ember Glow";
    document.getElementById("lampTh").innerHTML = "Gleam Lamp";
    document.getElementById("lampF").innerHTML = "Halo Glow";
    document.getElementById("lampFi").innerHTML = "Luma Glow";
    lamp.src = "images/lamp/Eden Lamp.jpg";
    lampOne.src = "images/lamp/Ember Glow.jpg";
    lampTwo.src = "images/lamp/Gleam Lamp.jpg";
    lampThree.src = "images/lamp/Halo Glow.jpg";
    lampFour.src = "images/lamp/Luma Glow.jpg";
}
lampButton[2].onclick = function () {
    for (lButton of lampButton) {
        lButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("lampO").innerHTML = "Luxora Lamp";
    document.getElementById("lampT").innerHTML = "Mira Table Lamp";
    document.getElementById("lampTh").innerHTML = "Nova Table Lamp";
    document.getElementById("lampF").innerHTML = "Radiance Lamp";
    document.getElementById("lampFi").innerHTML = "Serenity Lamp";
    lamp.src = "images/lamp/Luxora Lamp.jpg";
    lampOne.src = "images/lamp/Mira Table Lamp.jpg";
    lampTwo.src = "images/lamp/Nova Table Lamp.jpg";
    lampThree.src = "images/lamp/Radiance Lamp.jpg";
    lampFour.src = "images/lamp/Serenity Lamp.jpg";
}
lampButton[3].onclick = function () {
    for (lButton of lampButton) {
        lButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("lampO").innerHTML = "SiennaLamp";
    document.getElementById("lampT").innerHTML = "Solstice Lamp";
    document.getElementById("lampTh").innerHTML = "Vera Lamp";
    document.getElementById("lampF").innerHTML = "Zara Lamp";
    document.getElementById("lampFi").innerHTML = "Zenith Pendant";
    lamp.src = "images/lamp/Sienna Lamp.jpg";
    lampOne.src = "images/lamp/Solstice Lamp.jpg";
    lampTwo.src = "images/lamp/Vera Lamp.jpg";
    lampThree.src = "images/lamp/Zara Lamp.jpg";
    lampFour.src = "images/lamp/Zenith Pendant.jpg";
}

//Decors
decorButton[0].onclick = function () {
    for (dButton of decorButton) {
        dButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("decorO").innerHTML = "Artifacts";
    document.getElementById("decorT").innerHTML = "Brix Frame";
    document.getElementById("decorTh").innerHTML = "Bubble Mirror";
    document.getElementById("decorF").innerHTML = "Chan De";
    document.getElementById("decorFi").innerHTML = "Chane Le";
    decor.src = "images/decor/Artifacts.jpg";
    decorOne.src = "images/decor/Brix Frame.jpg";
    decorTwo.src = "images/decor/Bubble Mirror.jpg";
    decorThree.src = "images/decor/Chan De.jpg";
    decorFour.src = "images/decor/Chan Le.jpg";
}
decorButton[1].onclick = function () {
    for (dButton of decorButton) {
        dButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("decorO").innerHTML = "Duxe Vase";
    document.getElementById("decorT").innerHTML = "G B Table";
    document.getElementById("decorTh").innerHTML = "G Table";
    document.getElementById("decorF").innerHTML = "Glimmer Bowl";
    document.getElementById("decorFi").innerHTML = "Harper Rug";
    decor.src = "images/decor/Duxe Vase.jpg";
    decorOne.src = "images/decor/G B Table.jpg";
    decorTwo.src = "images/decor/G Table.jpg";
    decorThree.src = "images/decor/Glimmer Bowl.jpg";
    decorFour.src = "images/decor/Harper Rug.jpg";
}
decorButton[2].onclick = function () {
    for (dButton of decorButton) {
        dButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("decorO").innerHTML = "Le Chan";
    document.getElementById("decorT").innerHTML = "Le Light";
    document.getElementById("decorTh").innerHTML = "Le Pillow";
    document.getElementById("decorF").innerHTML = "Luxe Vase";
    document.getElementById("decorFi").innerHTML = "Orion Mirror";
    decor.src = "images/decor/Le Chan.jpg";
    decorOne.src = "images/decor/Le Light.jpg";
    decorTwo.src = "images/decor/Le Pillow.jpg";
    decorThree.src = "images/decor/Luxe Vase.jpg";
    decorFour.src = "images/decor/Orion Mirror.jpg";
}
decorButton[3].onclick = function () {
    for (dButton of decorButton) {
        dButton.classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("decorO").innerHTML = "Radiance Hold";
    document.getElementById("decorT").innerHTML = "Tivoli Art";
    document.getElementById("decorTh").innerHTML = "Wood She";
    document.getElementById("decorF").innerHTML = "Wood Che";
    document.getElementById("decorFi").innerHTML = "Woodie";
    decor.src = "images/decor/Radiance Hold.jpg";
    decorOne.src = "images/decor/Tivoli Art.jpg";
    decorTwo.src = "images/decor/Wood She.jpg";
    decorThree.src = "images/decor/WoodChe.jpg";
    decorFour.src = "images/decor/Woodie.jpg";
}