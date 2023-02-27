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
        _id: new mongoose.Types.ObjectId(),
        fullName:request.body.fullName,
        email:request.body.email,
        image:request.body.image,
    }).save()// insertOne
    .then(data=>{
        response.status(201).json({data});
    })
    .catch(error=>next(error));
}

exports.updateteacher=(request,response,next)=>{
    teachreSchema.updateOne({
        _id:request.body.id
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
        _id:request.body.id
    }).then(data=>{
        response.status(200).json({data});
    })
    .catch(error=>next(error));
}