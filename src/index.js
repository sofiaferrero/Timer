
let secondsValue = 0;
let minutesValue = 0;

let currentInterval;
let currentButton;

// Helpers

function formatValue (value){
    // if(value < 10){
    //     return "0" + value;
    // }
    // else {
    //     return value;
    // }
    return ("0" + value).slice(-2);

}

function stop(){

    if(currentButton){
        currentButton.disabled = false;
    }
    clearInterval(currentInterval);
}

function reset (){
    secondsValue = 0;
    secondsSpan = document.querySelector("#seconds");
    secondsSpan.textContent = "00";
    minutesValue = 0;
    minutesSpan = document.querySelector("#minutes");
    minutesSpan.textContent = "00";
}


// Clock

function startClock() {

    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    min = formatValue(min);
    sec = formatValue(sec);
    clockDiv.innerHTML = hr + " : " + min + " : " + sec;

    let days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    dateDiv.innerHTML = date;

    let time = setTimeout(function(){ startClock() }, 500);
}

//Chronometer

function executeChronometer(){
    mainContainer.innerHTML = `<h1 class="hero--title" id="hero--title">Chronometer</h1>
    <div class="hero--time" id="hero--time">
      <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
    </div>
    <div class="hero--buttons" id="hero--buttons">
      <button onclick="startChronometer()" class="button hero--button" type="button">Start</button>
      <button onclick="stop()" class="button hero--button" type="button">Stop</button>
      <button onclick="reset()" class="button hero--button" type="button">Reset</button>
    </div>`;

    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
}

function startChronometer(params) {
    currentButton = event.target;
    currentButton.disabled = true;
    reset();

    currentInterval = setInterval(() =>{
        secondsValue += 1;
        if(secondsValue === 60){
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue); 
        }
        secondsSpan = document.querySelector("#seconds");
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000)
}

// Timer

function startTimer (){
    event.preventDefault();

    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);

    minutesSpan.textContent = formatValue(minutes);
    secondsSpan.textContent = formatValue(seconds);
    secondsValue = seconds;
    minutesValue = minutes;

    currentInterval = setInterval(() =>{
        secondsValue -= 1;
        if(secondsValue === -1){
            secondsValue = 59;
            minutesValue -= 1;
        }
        if(minutesValue === 00 && secondsValue === 00){
            const timeContainer = document.getElementById("hero--time");
            const title = document.createElement("h3");
            title.textContent = "El timer ha terminado";
            timeContainer.appendChild(title);
            const minutesInput = document.getElementById("minutesInput");
            minutesInput.classList.add("invisible");
            const secondsInput = document.getElementById("secondsInput");
            secondsInput.classList.add("invisible");

            clearInterval(currentInterval);
        }
        minutesSpan.textContent = formatValue(minutesValue);
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}


function executeTimer(){
    mainContainer.innerHTML = `
    <h1 class="hero--title" id="hero--title">Timer</h1>
          <div class="hero--time" id="hero--time">
            <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
          </div>
          <div class="hero--buttons" id="hero--buttons">
            <form class="timer-form" onsubmit="startTimer()">
            <div>
                <input type="number" min="00" max="59" required placeholder="min" id="minutesInput" name="minutes">
                <input type="number" min="00" max="59" required placeholder="seg" id="secondsInput" name="seconds">
            </div>
            <div>
                <button type="submit" class="hero--button">Start</button>
                <button onclick="stop()" class="button hero--button" type="button">Stop</button>
            </div>
            </form>
          </div>
    `;

    minutesSpan = document.querySelector("#minutes");
    secondsSpan = document.querySelector("#seconds");
}
