//1- import all obejct
// const module1=require("./module1"); // {id:20,projectName:"ITI"}
// // console.log("Module2",module1.id,module1.projectName);

// module1.getData();
// //2- import destuctring 
// // const {id}=require("./module1")
// // console.log(id);

// //3- run file
// // require("./module1");

// let number=5;
// console.log("Module2",module1);
//---------------------------- after defaults
const module1=require("./module1");

const data=module1();
console.log(module1.id,module1.projectName);
module1.getData();










