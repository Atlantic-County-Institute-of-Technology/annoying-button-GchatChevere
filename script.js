
/*const message = document.getElementById("response")
function yellatuser(click){
    response.textcontent = "ouch!";
    console.log(response)


}
button1.addEventListener("click" , yellatuser);*/

const button1 = document.getElementById("button1")

button1.addEventListener("click", yell_at_user)

function yell_at_user() {
        alert("Ouch!");
    }