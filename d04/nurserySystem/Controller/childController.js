const mongoose = require("mongoose");
require("./../Model/childModel");
const childernSchema=mongoose.model("childern");

exports.getAllChildern=(request,response,next)=>{
    childernSchema.find()
    .then((data) =>{
        response.status(200).json(data);
    })
    .catch((error) => next(error));
}

exports.addChild=(request,response,next)=>{
    new childernSchema({
        fullName: request.body.fullName,
        age: request.body.age,
        level: request.body.level,
        address:{
            city: request.body.address.city,
            street: request.body.address.street,
            building: request.body.address.building,
        }
    }).save()
    .then(data=>{
        response.status(201).json({data});
    })
    .catch(error => next(error))
}

exports.updateChild=(request,response,next)=>{
    childernSchema.updateOne({
        _id: request.body.id,
    },{
        $set: {
            fullName: request.body.fullName,
            age: request.body.age,
            level: request.body.level,
            address: request.body.address
        }
    }).then((data) => {
        if(data.matchedCount == 0)
            new Error("Not Found")
        else
            response.status(200).json(data);
    })
    .catch((error) => next(error));
}

exports.deleteChild=(request,response,next)=>{
    childernSchema.deleteOne({
        id: request.body.id
    }).then((data) =>{
        if(data.deletedCount == 0)
            new Error("Not Found")
        else
            response.status(200).json(data);
    })
    .catch((error) => next(error));
}