

// Summer Countdown//


const project1 = document.getElementById('project1');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds')

let summer = "21 Jun 2025";

function countdown(){
    const summerStart = new Date(summer);
    const currentDate = new Date();

    let secondsLeft = (summerStart-currentDate) / 1000;
    let days = Math.floor(secondsLeft / 3600 / 24);
    let hours = Math.floor(secondsLeft / 3600) % 24;
    let minutes = Math.floor(secondsLeft / 60) % 60;
    let seconds = Math.floor(secondsLeft) %  60;
  

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = twoDigitsFormat(minutes);
    secondsElement.innerHTML = twoDigitsFormat(seconds);
}

function twoDigitsFormat(element) {
    return element< 10 ? (`0${element}`) : element;
}

countdown();

setInterval(countdown, 1000);


// stopwatch //


const appendTens = document.getElementById("stopWatchTens")
const appendSeconds = document.getElementById("stopWatchSeconds")
const startButton = document.getElementById("stopWatchStart");
const stopButton = document.getElementById("stopWatchStop");
const resetButton = document.getElementById("stopWatchReset");
let timer;
let seconds = 00; 
let tens = 00; 

function startTimer(){
    tens++;
    if (tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
        appendTens.innerHTML = tens;
    }
    if (tens > 99){
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

startButton.onclick = function() {
    clearInterval(timer);
        timer = setInterval(startTimer, 10);

}

stopButton.onclick = function(){
    clearInterval(timer);

}

resetButton.onclick = function(){
    clearInterval(timer);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;

}




// To-do list//

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var unList = document.getElementById("todolist");

button.addEventListener('click', function(){
    if(input.value.length > 0){
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(input.value));
        unList.appendChild(list);
        input.value = "";
    }
});
input.addEventListener('keydown', function(e){
    console.log(e)
    if(e.keyCode === 13){
        if(input.value.length > 0){
            var list = document.createElement("li");
            list.appendChild(document.createTextNode(input.value));
            unList.appendChild(list);
            input.value = "";
         }
    }
});
