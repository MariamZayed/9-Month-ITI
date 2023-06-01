/************************************************
  * 
  *  Object Oriented Javascript
  * 
  */
// Object Based  , Language Objects, DOM , BOM
//userDefined Objects
//Array   ""+[]  --> [].toString()+""   [],,,,,,]
//window.toString(),obj,  --> Object -> [object Object]

/*********************************
 * 
 *  Anonymouse Object  -> object that contains information on run time
 */
//---------------------define empty object  
let object={};  
//--------------------- what about parent object 
//constructr.name , toString() and typeof 


//---------------------- Object properties
// let instructor={
//     age:20,
//     friends:["x","y","z"],
//     fullName:{firstName:"Mona",lastName:"Ahmed"},
//     driveLic:true
// };

//---------------------- How to call properties   1- . 2- [] 
// . [] setters and getters
// get property instructor.age;
// set property instructor.age=30;

// instructor["age"];  //getting
// instructor["age"]=30;  //setting

//non existing properties   undefined

//---------------------looping
// for(let property in instructor)
// {
//     console.log(property,instructor[property]);
// }

//------------------------ add and remove properties  on run time

// instructor.location="EGYPT";
//delete instructor.age;
//instructot["FBAccount"]="xxx@gmail.com"
// delete instructor["FBAccount"]



//-------------------------- Member functions  es5 and es6

let studentName="eman";//nameTextBox.value;
let studentage=20;//ageTextBox.value;

let student={name:studentName
    ,age:studentage
}

let instructor={
    age:20,
    friends:["x","y","z"],
    fullName:{firstName:"Mona",lastName:"Ahmed"},
    driveLic:true,
    // sleep:function(hours=100){
    //     // console.log(instructor.fullName.lastName,"sleeeepy OS students for ",hours);
    //     console.log(this.fullName.lastName,"sleeeepy OS students for ",hours);
    // }
    //problem    calling => inside object ES5
    // sleep:(hours=100)=>{
    //     // console.log(instructor.fullName.lastName,"sleeeepy OS students for ",hours);
    //     console.log(this,"sleeeepy OS students for ",hours);
    // }
    //ES 6
    sleep(hours)
    {
        console.log(this,"sleeeepy OS students for ",hours);
    }

};
//------------------ calling
// instructor.getFullName();
// instructor["getFullName"]();

//------------------ this?  and arrow functions

//------------------ add and remove on run time
// instructor.canRun=function(){console.log("Yes");}
// delete instructor.canRun;
// //----------------- for in 
// for(let property in instructor   )
// {
//     if(typeof instructor[property]!="function" )
//     console.log(property,instructor[property]);
// }

// function movingElem(){
//     this.speed+=10;
//     console.log(this);
// }

// let car={
//     model:"PMW",
//     speed:0,
//     toString(){
//             return `${this.model} : ${this.speed}`
//     },
//     move(){
//            //this --> car
//            let object=this;
//         setInterval(function(){
            
//             object.speed+=10;//window
//             car.speed+=10;//window
//         },1000)
//     }
// }

// console.log(car+"");





/****************************************************
 * 
 *  Where can we use Arrow function   ???
 */


/*************************************************
 *   spread Operators
 */
//why don't use var or this with variables

// let studentVersion2={};
// for( property in student)
// {
//     studentVersion2[property]=student[property]
// }


 
 //spraed operor with objects
 //clone objects {...obj}
 //concat objects {...obj1,...obj2}




/*******************************************
 * ES5 Classes  --> construcor function + new
 * 
 */
// function Person(id=0,name="")   
// {
//     this.id=id;
//     this.name=name;
// }
// //calling   Person(1,"eman")
// //calling new Person(1,"eman");




//-------------------- call it as a function and as a Class!!!! (Number class)
/**************************************************
 * 
 *      ES6 Classes
 * 
//  */
//constructor function ES5
// Classes in ES6

class Employee{
        //ES10     #
        //1- defined in the calss 
        #id;
        static #count=0;
        constructor(id=0,name=""){
            //taking with id
                this.#id=id;
                this.name=name;
                Employee.#count++;
        }

        // set id(value){ 
        //     this.#id=value
        // }
        get id(){return this.#id}
        static get count(){return Employee.#count}

        move(){
            console.log("movine", this.#id, this.name);
        }

}

let employeeNumber1=new Employee(2,"ahmed");
let employeeNumber2=new Employee(3,"hala");


//create 
// sort names
//JSON


//Inhiritance 
class Shape{
    constructor(color)
    {
        this.color=color;
    }

}

class Rectangle extends Shape
{
    constructor(dim1,dim2,color)
    {
        super(color);
        this.dim1=dim1;
        this.dim2=dim2;
    }
    draw()
    {
        console.log("Recatange");
    }
}

let rectangle1=new Rectangle(1,3,"red");
let rectangle2=new Rectangle(2,5,"green");





function createRow(studentObject)
{
    let trElem=document.createElement("tr");
    let tdObject=null;
    for( let property in studentObject)
    {
        tdObject=createElement("td");
        tdObject.innerText=studentObject[property];
        trElem.append(tdObject);
    }

    return trElem;

}

//calling 
// createRow({
//     name:nameTextBox.value,
//     grade:gradeTextBox.value,
//     department:radioSelected.value

// })

//1- input for function
//2- o/p for function
//3- server and client



// object={
//     name:nameTextBox.value,
//     grade:gradeTextBox.value,
//     department:radioSelected.value

// }
//convert object to string






















