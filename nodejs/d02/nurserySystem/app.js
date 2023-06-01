const express=require("express");
const server= express(); //1- open server //create http server
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");

let port= process.env.PORT|| 8080 // port 8080

//2- listen port
server.listen(port,()=>{
    console.log("server is listening",port);
});
// app.listen(8080, () => {
//     console.log("I am Listening !");
//     //This is a Callback that Could be used to test Connection  ;
// });


//middlewares
// Morgan
// server.use(
//     morgan("tiny", {
//     stream: fs.createWriteStream("./log.log", {
//         flags: "a", // appending
//     }),
//     })
// );

//cors
server.use(
    cors({})
);

// Not found MW, Which used if there is NON-existing route
server.use((request,response,next)=>{
    response.status(404).json({message:"Page not Found"});
});

// Error MW, we put in last MW, as to catch any raied exception
server.use((error,request,response,next)=>{
    response.status(500).json({message:error+""});
});