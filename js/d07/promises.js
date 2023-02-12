// console.log("start");
// setTimeout(()=>{
//     console.log("Time out......");
// },1000)
// console.log("end");

// let promise=new Promise((resolve,reject)=>{

//     //code --> time
//     if(false)
//     resolve("true");
//     else
//     reject(" cant open db")
// });


// console.log("start");
// promise.then((data)=>{
//     console.log("Done" , data);    //creation tr 
// })
// .catch((error)=>{
//     console.log("Error",error);
// })
// console.log("end");






//take exam
// takeExam().then((result)=>{
//     console.log("DONe", result);
// }).catch(error=>console.log(error));


//Call Back Hell
// getFavCountries(2).then((result)=>{
//     console.log(result);
  
//     return getWeather(result);

// })
// .then((data)=>
// {
//         console.log(data);
// })
// .catch(error=>{
//     console.log("Error ",error);
// });


//Async await



runWeatherForCountries(4);



