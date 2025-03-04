
let button1 = document.getElementById("button1");
let text = document.getElementById("response");
let button2 = document.getElementById("button2");
let text1 = document.getElementById("response2");



let clicks = 0;

button1.addEventListener("click" , annoy);

function annoy() {
    clicks += 1
    if(clicks == 5) {
        text.innerHTML = "Ouch!";
    }
    
    else if(clicks == 9) {
        text.innerHTML = "I swear to clicky click click";
    }
    
    else if(clicks == 14) {
        text.innerHTML = "that was the last click";
    } 
    
    else if(clicks == 19) {
        text.innerHTML = "";
    } 
    
    else if(clicks == 20) {
        button1.innerHTML = "Recalibrating";
    } 
    
    else if(clicks == 29) {
        button1.style.backgroundColor = "#00FF00";
        button1.style.borderColor ="yellow"
        button1.innerHTML = "Recalibration Finished";
    }   
    else if(clicks == 34) {
        button1.style.backgroundColor = "#00FF00";
        button1.style.borderColor ="black"
    }   
    else if(clicks == 32) {
    }   
    
    else if(clicks == 40) {
        text.innerHTML = "if you touch me one more time i swear i will murder your family" ;
    }   
}