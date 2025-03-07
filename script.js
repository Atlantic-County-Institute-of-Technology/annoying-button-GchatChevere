
let button1 = document.getElementById("button1");
let buttonbase = document.getElementById("buttonbase");
let text = document.getElementById("response");
let button2 = document.getElementById("button2");
let text1 = document.getElementById("response2");
let sound = new Audio('assets/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3');
let click = new Audio('assets/dry-fart.mp3');


let clicks = 0;

button1.addEventListener("click" , annoy);

function annoy() {
    click.play();
    clicks += 1
    if(clicks == 1) {
        text.innerHTML = "Ouch!";
    }
    
    else if(clicks == 2) {
        text.innerHTML = "I Swear To Clicky Click Click";
    }
    
    else if(clicks == 3) {
        text.innerHTML = "That Was The Last Click";
    } 
    
    else if(clicks == 4) {
        text.innerHTML = "";
    } 
    
    else if(clicks == 5) {
        button1.innerHTML = "Recalibrating";
    } 
    
    else if(clicks == 6) {
        button1.classList.add ("happy");
        button1.classList.add ("glow");
        button1.innerHTML = "Recalibration Finished";
    }   
    else if(clicks == 7) {
            button1.classList.remove ("glow");  
        button1.innerHTML=" "
    }  
    
    else if(clicks == 8) {
        text.innerHTML = "Hey That Tickles!" ;
    }

    else if(clicks == 9) {
        buttonbase.classList.add ("move1")
        button1.classList.add ("movement1");
        text.innerHTML = "Catch Me If You Can!" ;

    }  

    else if(clicks == 10) {
        button1.classList.add ("movement2");
        buttonbase.classList.add("move2")
    } 
    
    else if(clicks == 11) {
        button1.classList.add ("movement3");
        buttonbase.classList.add("move3")
    }

    else if(clicks == 12) {
        button1.classList.add ("movement4");
        buttonbase.classList.add("move4")
        text.innerHTML = "OKAY IM DONE"
    }

    else if(clicks == 12) {
        button1.classList.add ("movement4");
        buttonbase.classList.add("move4")
        text.innerHTML = "OKAY IM DONE"
    }

    /*else if(clicks == 13) {
        sound.play();
    }*/

    else if(clicks == 13) {
        text.innerHTML = "TRY TO GET ME NOW!"
        button1.classList.add("rage")
        buttonbase.classList.add("rage")
        sound.play();
        text.innerHTML = "OKAY IM DONE"

    }

    else if(clicks == 15) {
        text.innerHTML = "Wait! Waht??? NO WAY how could this be possible!"
        button1.classList.remove("rage")
        buttonbase.classList.remove("rage")
    }

    else if(clicks == 16) {
        text.innerHTML = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam explicabo exercitationem beatae a, cupiditate illo at minima esse id praesentium? Laborum nostrum fuga obcaecati, non repellendus hic aut aliquid.</div>")
        button1.classList.add("god")
        buttonbase.classList.add("god")
    }

}