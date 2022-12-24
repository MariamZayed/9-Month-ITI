// first creating objects of html elements
let counter_box = document.querySelector(".counter");
let score_box = document.querySelector(".score");
let time_txt = document.querySelector(".timer");
let name_box = document.querySelector(".name");
let again_button = document.querySelectorAll(".again_button");
let home_buttons = document.querySelectorAll(".home");
let win_msg = document.querySelector(".win_msg");
let lose_msg = document.querySelector(".lose_msg");
name_box.innerText = window.localStorage.getItem('player_name');

// call function that shows 60 secs timer
setGameTimer();

// creating  objects of different colors of birds
let birds_obj = {
    obj1 : new WhiteBird(),
    obj2 : new WhiteBird(),
    obj3 :new WhiteBird(),
    obj4 : new CyanBird(),
    obj5 : new CyanBird(),
    obj6 : new BlackBird(),
    obj7: new BlackBird()
}
// make them actually move
birds_obj.obj1.move(100);
birds_obj.obj2.move(500);
birds_obj.obj3.move(50);
birds_obj.obj4.move(20);
birds_obj.obj5.move(20);
birds_obj.obj6.move(10);
birds_obj.obj7.move(10);

let bomb_obj = new Bomb();
timedBomb();

// when 60 secs pass kill birds and bombs obj
// show the win/lose popup div
setTimeout(function(){
    for (const key in birds_obj) {
        clearInterval(birds_obj[key].id);
        birds_obj[key].bird_obj.style.display = "none";
    }

    let score_number = score_box.innerText.split(":")
    if(score_number[1] > 50){
        win_msg.classList.remove("hidden")
    }
    else{
        lose_msg.classList.remove("hidden")
    }
    clearInterval(id);
    bomb_obj.bomb_obj.style.display="none";
},60000);

// if user clicked on again button restart game
again_button[0].addEventListener("click",()=>{
    location.reload()})
again_button[1].addEventListener("click",()=>{
    location.reload()})

// if user clicked on home button to go back to main page
for (let i = 0; i < 3; i++) {
    home_buttons[i].addEventListener("click",()=>{
        location.href = "index.html"
    })
}