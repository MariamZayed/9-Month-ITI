//hoisting
// Car =
    // model=ddd
    // year=0000
    // getmodel()
        //ll =10
//SayName(name,age)
// car1= new Car()
    

// ---------
// Running

// class Car{
//     constructor(_model,_year){
//         this.model=_model;
//         this.year=_year;
//     }
//     getModel(){
//         var ll=10;
//         console.log(this.model);
//     }
// }
// var car1 = new Car("ddd",0000);
// car1.getModel()

// function sayName(name,age){}

// Car = "name"
// console.log(Car);

class Rectangle {
    constructor(length, width) {
    console.log(new.target.name === "Rectangle");
    this.length = length;
    this.width = width;
    }
}
class Square extends Rectangle {
    constructor(length) {
    super(length, length)
    }
}
    // new.target is Square
    var obj = new Square(3); // outputs false