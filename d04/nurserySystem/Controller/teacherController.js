const mongoose=require("mongoose");
require("./../Model/teacherModel"); 

//getter
const teachreSchema=mongoose.model("teachers");

exports.getAllteachers=(request,response)=>{
    teachreSchema.find({})
                .then((data)=>{
                    response.status(200).json({data});        
                })
                .catch((error)=>{
                    next(error);
                })
}

exports.addteacher=(request,response,next)=>{
    new teachreSchema({
        id:request.body.id,
        fullName:request.body.fullName,
        email:request.body.email,
        image:request.body.email,
    })  .save()// insertOne
        .then(data=>{
            response.status(201).json({data});
        })
        .catch(error=>next(error));
}

exports.updateteacher=(request,response,next)=>{
    teachreSchema.updateOne({
        id:request.body.id
    },{
        $set:{
            fullName:request.body.fullName,
            email:request.body.email,
            image:request.body.image
        }
    }).then(data=>{
        if(data.matchedCount==0)
            next(new Error("Teacher not Found"));
        else
            response.status(200).json({data});
    })
    .catch(error=>next(error));
}

exports.deleteteacher=(request,response,next)=>{
    teachreSchema.deleteOne({
        id:request.body.id
    }).then(data=>{
        response.status(200).json({data});
    })
    .catch(error=>next(error));
}