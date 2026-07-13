// ================================
// Select Elements
// ================================

const apple = document.getElementById("apple");
const banana = document.getElementById("banana");
const basket = document.getElementById("basket");
const score = document.getElementById("score");

let basketX = 280;

let appleY = 0;
let bananaY = -250;

let appleX = Math.floor(Math.random() * 620);
let bananaX = Math.floor(Math.random() * 620);

let totalScore = 0;

// ================================
// Basket Movement
// ================================

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowLeft") {

        basketX -= 30;

        if (basketX < 0) {
            basketX = 0;
        }

    }

    if (e.key === "ArrowRight") {

        basketX += 30;

        if (basketX > 580) {
            basketX = 580;
        }

    }

    basket.style.left = basketX + "px";

});

// ================================
// Apple Falling
// ================================

function moveApple() {

    appleY += 4;

    if (appleY > 500) {

        appleY = -60;
        appleX = Math.floor(Math.random() * 620);

    }

    apple.style.top = appleY + "px";
    apple.style.left = appleX + "px";

    if (

        appleY > 400 &&
        appleY < 470 &&
        appleX > basketX - 40 &&
        appleX < basketX + 100

    ) {

        totalScore++;

        score.innerHTML = totalScore;

        appleY = -60;
        appleX = Math.floor(Math.random() * 620);

    }

}

// ================================
// Banana Falling
// ================================

function moveBanana() {

    bananaY += 5;

    if (bananaY > 500) {

        bananaY = -60;
        bananaX = Math.floor(Math.random() * 620);

    }

    banana.style.top = bananaY + "px";
    banana.style.left = bananaX + "px";

    if (

        bananaY > 400 &&
        bananaY < 470 &&
        bananaX > basketX - 40 &&
        bananaX < basketX + 100

    ) {

        totalScore--;

        score.innerHTML = totalScore;

        bananaY = -60;
        bananaX = Math.floor(Math.random() * 620);

    }

}

// ================================
// Start Game
// ================================

setInterval(function () {

    moveApple();
    moveBanana();

}, 20);