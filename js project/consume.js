let counter_box = document.querySelector(".counter");
let score_box = document.querySelector(".score");
let time_txt = document.querySelector(".timer");
let name_box = document.querySelector(".name");
name_box.innerText = window.localStorage.getItem('player_name');

setGameTimer();

let birds_obj = {
    obj1 : new WhiteBird(),
    obj2 : new WhiteBird(),
    obj3 :new WhiteBird(),
    obj4 : new CyanBird(),
    obj5 : new CyanBird(),
    obj6 : new BlackBird(),
    obj7: new BlackBird()
}
birds_obj.obj1.move(100);
birds_obj.obj2.move(500);
birds_obj.obj3.move(50);
birds_obj.obj4.move(20);
birds_obj.obj5.move(20);
birds_obj.obj6.move(10);
birds_obj.obj7.move(10);


let bomb_obj = new Bomb();
timedBomb();

setTimeout(function(){
    for (const key in birds_obj) {
        clearInterval(birds_obj[key].id);
        birds_obj[key].bird_obj.style.display = "none";
    }
    clearInterval(id);
    bomb_obj.bomb_obj.style.display="none";

},60000);

