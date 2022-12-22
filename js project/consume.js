
let birds_obj = {
    obj1 : new WhiteBird(),
    obj2 : new WhiteBird(),
    obj3 :new WhiteBird()
}
birds_obj.obj1.move(100);
birds_obj.obj2.move(500);
birds_obj.obj3.move(50);

let bomb_obj = new Bomb();
timedBomb();

setTimeout(function(){
    for (const key in birds_obj) {
        clearInterval(birds_obj[key].id);
        birds_obj[key].bird_obj.style.display = "none";
    }
},5000);