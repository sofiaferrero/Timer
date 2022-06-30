btnChronometer.addEventListener("click", ()=>{
    location.hash = "#chronometer";
});

btnTimer.addEventListener("click", ()=>{
    location.hash = "#timer";
});

btnAlarm.addEventListener("click", ()=>{
    location.hash = "#alarm";
});

btnClock.addEventListener("click",()=>{
    location.hash = "#home";
    location.reload(true);
});


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator (){
    if (location.hash.startsWith("#chronometer")){
        chronometerPage();
    } else if (location.hash.startsWith("#timer")){
        timerPage();
    } else if (location.hash.startsWith("#alarm")){
        alarmPage();
    } else {
        homePage ();
    }
}

function homePage (){
    console.log("home");
    
    // const secondsSpan = document.querySelector("#seconds");
    // const minutesSpan = document.querySelector("#minutes");

    clockdateContainer.classList.remove("invisible");
    clockdateWrapper.classList.remove("invisible");

    mainContainer.classList.remove('invisible');
    mainTitle.classList.add('invisible');
    timeContainer.classList.add("invisible");
    // secondsSpan.classList.add("invisible");
    // minutesSpan.classList.add("invisible");
    btnMainContainer.classList.add("invisible");

    startClock();
}

function chronometerPage (){
    console.log("chronometer");

    const secondsSpan = document.querySelector("#seconds");
    const minutesSpan = document.querySelector("#minutes");

    clockdateContainer.classList.add("invisible");
    clockdateWrapper.classList.add("invisible");

    mainContainer.classList.remove("invisible");
    mainTitle.classList.remove("invisible");
    timeContainer.classList.remove("invisible");
    secondsSpan.classList.remove("invisible");
    minutesSpan.classList.remove("invisible");
    btnMainContainer.classList.remove("invisible");
    clockDiv.classList.add("invisible");
    clockdateContainer.classList.add("invisible");
    clockdateWrapper.classList.add("invisible");
    dateDiv.classList.add("invisible");

    executeChronometer();
}

function alarmPage (){
    console.log("alarm");

    clockdateContainer.classList.add("invisible");
    clockdateWrapper.classList.add("invisible");

    mainContainer.classList.remove("invisible");
    mainTitle.classList.add("invisible");
    timeContainer.classList.add("invisible");
    secondsSpan.classList.add("invisible");
    minutesSpan.classList.add("invisible");
    btnMainContainer.classList.add("invisible");
    clockDiv.classList.add("invisible");
    clockdateContainer.classList.add("invisible");
    clockdateWrapper.classList.add("invisible");
    dateDiv.classList.add("invisible");

    executeAlarm();
}


function timerPage (){
    console.log("timer");

    const secondsSpan = document.querySelector("#seconds");
    const minutesSpan = document.querySelector("#minutes");

    clockdateContainer.classList.add("invisible");
    clockdateWrapper.classList.add("invisible");

    mainContainer.classList.remove("invisible");
    mainTitle.classList.remove("invisible");
    timeContainer.classList.remove("invisible");
    secondsSpan.classList.remove("invisible");
    minutesSpan.classList.remove("invisible");
    btnMainContainer.classList.remove("invisible");
    clockDiv.classList.add("invisible");
    clockdateContainer.classList.add("invisible");
    clockdateWrapper.classList.add("invisible");
    dateDiv.classList.add("invisible");

    executeTimer();

}