
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let text = document.getElementById("response");

let clicks = 0;

button1.addEventListener("click" , annoy);

function annoy() {
    clicks += 1
    if(clicks == 5) {
        text.innerHTML = "Ouch!";
    }

    if(clicks == 9) {
        text.innerHTML = "I swear to clicky click click";
    }

    if(clicks == 14) {
        text.innerHTML = "that was the last click";
    } 

    if(clicks == 19) {
        text.innerHTML = "";
    } 

    if(clicks == 20) {
        button1.innerHTML = "Recalibrating";
    } 

    if(clicks == 29) {
        button1.innerHTML = "Recalibration Finished";
    }   
    if(clicks == 30) {
        button1.innerHTML = button2.innerHTML;
    } 
 
}