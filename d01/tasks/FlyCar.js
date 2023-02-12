const Car=require("./car.js");
// module.exports.FlyCar=class FlyCar extends Car{
exports.FlyCar =  class FlyCar extends Car{
  constructor(model, year){
    super(model, year);
    this.canFly = true;
  }
  carData(){
    return "I can fly " + super.carData();

  }
}