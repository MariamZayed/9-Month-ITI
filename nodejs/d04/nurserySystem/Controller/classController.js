const mongoose = require("mongoose");
require("./../Model/classModel");
require("./../Model/teacherModel");
require("./../Model/childModel");
const classSchema = mongoose.model("classes");
const teacherSchema = mongoose.model("teachers");
const childSchema = mongoose.model("childern");


exports.getAllClasses=(request,response,next)=>{
    classSchema.find()
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => next(error));
}

exports.addClass=(request,response,next)=>{
    let childerns = Array.from(new Set(request.body.children));
    teacherSchema.findOne({
            _id:request.body.supervisor
        })
    .then(data => {
        if(data==null)
            throw new Error("Teacher not Found");
        else
            return childSchema.find({
                _id:{$in:childerns}
            })
    }).then(data => {
        if(data.length != childerns.length)
            throw Error("Childern not Found");
        else{
            return new classSchema({
                name: request.body.name,
                supervisor: request.body.supervisor,
                children: childerns,
            })
        .save()
    }
    })
    .then((data) => {
    response.status(201).json(data);
    })
    .catch((error) => next(error));
}

exports.updateClass=(request,response,next)=>{
    let childerns = Array.from(new Set(request.body.children));
    teacherSchema.findOne({_id:request.body.supervisor},{_id:1})
    .then(data => {
    if(data==null && request.body.supervisor != undefined){
        throw new Error("Teacher not Found");
    }else{
        return childSchema.find({_id:{$in:childerns}},{_id:1})
    }
    }).then(data => {
    if(data.length != childerns.length){
        throw Error("Childern not Found");
    }else{
        return classSchema
        .updateOne(
        {
            _id: request.body.id,
        },
        {
            $set: {
            name: request.body.name,
            supervisor: request.body.supervisor,
            children: childerns,
            },
        }
        )
    }
    })
    .then((data) => {
    if(data.matchedCount == 0){
        throw new Error("Not Found")
    }else{
        response.status(200).json(data);
    }
    })
    .catch((error) => next(error));
}

exports.deleteClass=(request,response,next)=>{
    classSchema.deleteOne({_id:request.body.id})
    .then(data=>{
    if(data.deletedCount == 0){
        throw new Error("Not Found")
    }else{
        response.status(200).json(data);
    }
    })
    .catch(error=>next(error))
}
