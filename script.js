let hunger = 50;
let happiness = 50;
let isDead = false;
let isEating = false;
let isPet = false;
let isTalking = false;


function updatePet() {

    const pet = document.getElementById("pet");

    if (isDead) {
        pet.src = "gravestone.png";
        return;
    }

    if (hunger <= 0 || happiness <= 0) {
        isDead = true;
        pet.src = "gravestone.png";
        return;
    }

    if (isEating) {
        pet.src = "iseating.png";
        return;
    }

    if (isPet) {
        pet.src = "pet.png";
        return;
    }

    pet.src = "normal.png";
    }
    
//cookie
    document.getElementById("cookie").onclick = function () {
        hunger = hunger + 5;
        document.getElementById("hunger").innerText = "Hunger: " + hunger;
        isEating = true;
        updatePet();

    setTimeout(() => {
        isEating = false;
        updatePet();
    }, 1000);
    }

//pet
document.getElementById("heart").onclick = function () {
        happiness = happiness+ 5;
        document.getElementById("happiness").innerText = "Happiness: " + happiness;
        isPet = true;
        updatePet();

    setTimeout(() => {
        isPet = false;
        updatePet();
    }, 1000);
    }

    setInterval(() => {
        hunger--;
        happiness--;

        document.getElementById("hunger").innerText = "Hunger: " + hunger;
         document.getElementById("happiness").innerText = "Happiness: " + happiness;
         updatePet();
   
    }, 1000);


