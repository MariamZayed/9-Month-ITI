import {Car} from "./car.js"
export class FlyCar extends Car{
  constructor(model, year){
    super(model, year);
    this.canFly = true;
  }
  toString(){
    return "I can fly " + super.toString();
  }
}