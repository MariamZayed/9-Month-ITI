let bg_img = document.createElement("img");
let counter_box = document.querySelector(".counter");
let score_box = document.querySelector(".score");
document.body.style.cssText = "background-image: url('images/garden2.webp'); background-size: cover; background-repeat:no-repeat;"
let time_txt = document.querySelector(".timer");

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

