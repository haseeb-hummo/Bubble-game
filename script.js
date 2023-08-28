let screen = document.querySelector("#screen");

function makeBubble(){

    let bubble = '';

    for (let i = 1; i <= 96; i++) {
        bubble += `<div class="bubble">${i}</div>`;

    }
    screen.innerHTML += bubble;
}

makeBubble();



let remainingTime = 61; 
const timerElement = document.querySelector("#timer");

function updateTimerDisplay() { 

    const interval = setInterval(() => {

        remainingTime--;
        console.log("Interval is running");
        timerElement.textContent = remainingTime;
        
        if (remainingTime <= 0) {
            clearInterval(interval);
            console.log("Timer has reached 0");
        }

    }, 1000);
}

updateTimerDisplay(); 


