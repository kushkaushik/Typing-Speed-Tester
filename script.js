const textArea = document.querySelector("#textArea77");
const timer5 = document.querySelector("#timerVala");
const testWrapper90 = document.querySelector("#textWrapper54");
const para86 = document.querySelector("#third5 p").innerHTML;

const btn32 = document.querySelector("#reset");



var timeStop =false;

var interval;

var timerFor = [0,0,0,0];
var timers;
////  Helper function fo rtime 0-9

function zeroTime(timerZone) {
    if (timerZone<=9) {
        timerZone = "0" + timerZone;
    }
    return timerZone;
}


//Timer function
function runTime() {
    
let currentTimer = zeroTime(timerFor[0]) + ":" + zeroTime(timerFor[1]) + ":" + zeroTime(timerFor[2]);

   timer5.innerHTML = currentTimer;
    timerFor[3]++;
    
timerFor[0] = Math.floor((timerFor[3]/100)/60);
timerFor[1] = Math.floor((timerFor[3]/100) - (timerFor[0] * 60));
timerFor[2] = Math.floor((timerFor[3] - (timerFor[1] * 100) - (timerFor[0] * 6000)));  
}



// spelling checks;

function spellCheck() {
    let textword = textArea.value;
let textEntered = para86.substring(0,textword.length);
    
    if (textword == para86 && !timeStop) {
        testWrapper90.style.borderColor = "#429890";
        timeStop = true;
        clearInterval(interval);
        
    } else {
        if (textword == textEntered) {
            testWrapper90.style.borderColor = "green";
        
        }
        else{
            testWrapper90.style.borderColor = "#E95D0F";
           
             
        }
    }
}




// starting function //
function start() {
    
    let textLength = textArea.value.length;
    if (textLength === 0) {
       
  interval = setInterval(runTime,10);
    }
    console.log(textLength);
}



////  Reset button //

function resetTime() {
    
    clearInterval(interval);
    interval = null;
    timerFor = [0,0,0,0];
    timeStop = false;
    textArea.value = "";
    timer5.innerHTML = "00:00:00";
}





// all query selectors //

textArea.addEventListener("keypress" , start ,false);
textArea.addEventListener("keyup" , spellCheck ,false);

btn32.addEventListener("click" , resetTime , false);