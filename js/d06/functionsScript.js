let car_img_obj = document.createElement("img");
let body_obj = document.querySelector("body");
let value=0;
class Engine{
    #img ;
    static #count=0;

    constructor(img=0){
        this.#img = img;
        Engine.#count++;
        
        if (new.target.name === "Engine") {
            throw new Error("This class cannot be instantiated directly.") }
        }
        get count(){
            return this.count;
        }
}


class Car extends Engine{
    constructor(_x,_y,_img){
        super(_img);
        this.x=_x;
        this.y=_y;

        car_img_obj = document.createElement("img");
        body_obj = document.querySelector("body");
        car_img_obj.src = _img;
        body_obj.append(car_img_obj)
    }
    
    moveRight(value1){
        value+=value1;
        if(value<(window.innerWidth-car_img_obj.width)){
        car_img_obj.style.cssText=`position: absolute; left:${value}px;`
        }else{
            car_img_obj.style.cssText = `transform:rotateY(180deg);position: absolute; left:${value}px`;
            this.moveLeft(value1);
        }
    }
    moveLeft(value1){
        value-=value1;
        if(value>(window.innerWidth-car_img_obj.width)){
        car_img_obj.style.cssText=`position: absolute; left:${value}px; transform:rotateY(180deg)`;
        }else{
            car_img_obj.style.cssText = `transform:rotateY(180deg);position: absolute; left:${value}px`;
            this.moveRight(value1);
        }
    }
}   