////////////////////////////////////////////////////////////////////////////

let screen = document.querySelector("#screen");

function makeBubble(){

    let bubble = '';
    
    for (let i = 1; i <= 96; i++) {
        let randomNumber = Math.floor((Math.random() * 10) + 1)
        bubble += `<div class="bubble">${randomNumber}</div>`;

    }
    screen.innerHTML = bubble;
}

makeBubble();

////////////////////////////////////////////////////////////////////////////


let remainingTime = 61; 
const timerElement = document.querySelector("#timer");

function updateTimerDisplay() { 

    const interval = setInterval(() => {

        remainingTime--;
        console.log("Interval is running");
        timerElement.textContent = remainingTime;
        
        if (remainingTime <= 0) {
            clearInterval(interval);
            screenBottom.innerHTML = `<h1> Game Over your score is ${score} </h1>`
            console.log("Timer has reached 0");
        }

    }, 1000);
}

updateTimerDisplay(); 


////////////////////////////////////////////////////////////////////////////

let setRandomHit = 5;
const hitElement = document.querySelector("#hit");

function updateRandomHit() {

    setRandomHit = Math.floor((Math.random() * 10) + 1);
    hitElement.textContent = setRandomHit;
}

updateRandomHit();


////////////////////////////////////////////////////////////////////////////

const scoreElement = document.querySelector("#score");
let score = 0;

function updateScore(){
    score += 10;
    scoreElement.textContent = score;
}

// updateScore();

////////////////////////////////////////////////////////////////////////////


const screenBottom = document.querySelector("#screen");

screenBottom.addEventListener("click" , function(event) {
    let clickedNumber = Number(event.target.innerText);
    
    if (clickedNumber === setRandomHit){
        updateScore();
        updateRandomHit();
        makeBubble();
    }
})