// defualt class 
module.exports =  class Car {
    constructor(model, year){
      this.model = model;
      this.year = year;
    }
    carData(){
      return `${this.model}:${this.year}`
    }
  }