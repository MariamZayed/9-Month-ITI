let start_button = document.querySelector("button");
let warning_text = document.querySelector("p");
let player_name_box = document.querySelector("input");
let warning = document.querySelector(".warning")

start_button.addEventListener("click",function(){
    if(player_name_box.value == ""){
        warning_text.innerText = " Please Enter Your Name To Start the Game! 🥳";
        warning_text.style.cssText = "text-align:center; color:red;";
        warning_text.classList.remove("hidden");
    }
    else{
        window.localStorage.setItem('player_name',player_name_box.value);
        location.href = 'game.html';
    }
})