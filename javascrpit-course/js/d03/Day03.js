/*********************************************************
 * 
 *  Language Objects (built-in classes in javascript)
 *  Javascript is Object-based Language
 * 
 */

//-------------- String Class-------------------------
let instrcuotrName="Eman";
let instrcuotrNameVer2="Eman";
let instructorObject=new String("Eman ITI instructor");
let instructorObjectVer2=new String("Eman");//"Eman ITI instructor");

//class String
 

//different between "" ans new String();   wrapping
// "1,2,3,4,5".split(",");
//1- warpping of premitive inside object new String("1,2,3,4,5")
//2- call split 
//3- ; destroy the object

// for documentation https://devdocs.io/

//length ,toLowerCase() , toUpperCase()
//indexOf , lastIndexOf  //email
//substring, substr, split
//replace     // regular Expressions  --> search (match)


//-->   functions chaining
// courseName.toUpperCase().indexOf("A");
//  let resultUpper=courseName.toUpperCase();
// let searchingIndex=resultUpper.indexOf("A");

//search i --> indexOf("i")
// let resultLower=myName.toLowerCase(); "eman iti instructor"
// let index=resultLower.indexOf("i")


// //asignment
// let result="";
// for(let i=0;i<instructorObject.length;i++)
// {
//    if( instructorObject[i].toLowerCase()==instructorObject[i])
//    {
//            result+= instructorObject[i].toUpperCase();
//    }
//    else
//    {
//             result+=instructorObject[i].toLowerCase();

//    }
// }

// console.log(result);







//------------

// -- Number Class-------------------------
// let number=new Number(22.456);
//define object and using the methods
// Number.MAX_SAFE_INTEGER
//type conversion
// Number("33")
//--------------- Boolean -----------------
//type conversion
new Boolean(""); //as object 
Boolean("");//as function
//-------------- Math Class---------------------------
//mathimatical operation
// Math.floor(Math.random()*10);

//-------------- Date Class----------------------------

//-------------- Array Class---------------------------
//-----------------------------------------------------
//definition   [] or new Array()
let grades=[2,1,4,6,2,7];  //shortCut
let scores=new Array();

let mixed=["mona",2,true,new String("hello")];

//datatypes
// scores.constructor.name //Array --> object
// grades.constructor.name //Array --> object





//cahnge values

//for loops  --> forEach, for loop, for in (in operator) , for of 
// grades[20]=20;
// for(let i=0;i<grades.length;i++){console.log(grades[i]);}
// console.log("********************")
// for(index in grades)
// {
//     console.log(grades[index]);
// }
// console.log("********************")
// for(item of grades)
// {
//     console.log(item);
// }

//maro
function filterGreaterThan5(item)
{
        return item>5;
}
filter(grades,filterGreaterThan5)
const lessThan5=function(elem){
    return elem<5;
}
filter(grades,lessThan5)



filter(grades,function(item){ return item<20})//anymouse function
filter(grades,item=> item<20);




grades.push(11,22);
console.log("before ",grades);
grades.sort(function(a,b){
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
})

console.log("after ",grades);














//sparse array (Bad array type --> delete operator(reserved word) )
//delete sparesArray---> forbidden
// let sparesArray=new Array(40)//(40) [empty × 40]
// sparesArray[0]=1;
// sparesArray[4]=2;
// sparesArray[100]=100;//[empty × 100, 100]
// grades[100]=100; (101) [10, empty × 99, 100]
//  for(let i=0;i<sparesArray.length;i++){
//       console.log(sparesArray[i]);  //let number;//undefined
//  }
//  for(let i in sparesArray){ 
//     console.log(sparesArray[i]);
//     }


//fill method
// let newArray=new Array(4).fill(0);
// array's methods push, pop, shift,unshift,splice,slice,concat,reduce and map

//grades.push(3);
//grades.push(4,6,8,7,9);  
//grades.pop() //9   length--;
//grades.unshift(99)
//grades.shift();
//grades.splice(1);
// grades.splice(1,0,66,5)// [10, 66,5, 3, 4, 6, 8, 7, 9]
//grades.splice(1,2); // [10, 6, 8, 7, 9] 


//eval with join --> forbidden never use eval in your code
// eval(grades.join("+"));










