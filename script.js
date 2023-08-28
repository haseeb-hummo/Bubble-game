const screen = document.querySelector("#screen");
const timerElement = document.querySelector("#timer");
const hitElement = document.querySelector("#hit");
const scoreElement = document.querySelector("#score");
const screenBottom = document.querySelector("#screen");

let remainingTime = 61;
let setRandomHit = 5;
let score = 0;

function makeBubble() {
    let bubble = '';

    for (let i = 1; i <= 96; i++) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        bubble += `<div class="bubble">${randomNumber}</div>`;
    }

    screen.innerHTML = bubble;
}

function updateTimerDisplay() {
    const interval = setInterval(() => {
        remainingTime--;
        timerElement.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(interval);
            screenBottom.innerHTML = `<h1> Game Over your score is ${score} </h1>`;
        }
    }, 1000);
}

function updateRandomHit() {
    setRandomHit = Math.floor(Math.random() * 10) + 1;
    hitElement.textContent = setRandomHit;
}

function updateScore() {
    score += 10;
    scoreElement.textContent = score;
}

function handleClick(event) {
    const clickedNumber = Number(event.target.innerText);

    if (clickedNumber === setRandomHit) {
        updateScore();
        updateRandomHit();
        makeBubble();
    }
}

screenBottom.addEventListener("click", handleClick);

makeBubble();
updateTimerDisplay();
updateRandomHit();
