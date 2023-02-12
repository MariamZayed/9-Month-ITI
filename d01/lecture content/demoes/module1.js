let number=2;

// console.log("inside module 1 numebr=",number);
// const openFile=()=>{
//     //code
// }
// (function(){})()  //IIFE

let projectName="ITI";


// //default export, after exports comes = right striaht
// module.exports=()=>{
//     //code
//     console.log("Main Function");
// }
// expoert normal properties
// module.exports.projectName=projectName;
// module.exports.id=20;
// module.exports.getData=()=>{}
// module.exports.Person=class{} 



//------------------ sohrt cut export wothout default export

// //default
// module.exports=()=>{
//     console.log("main function");
// }

exports.id=20;
exports.peojectname=projectName;
exports.getData=()=>{}




// module.exports.getData=()=>{
//     openFile();
//     console.log("get Data");
// }


console.log(module);