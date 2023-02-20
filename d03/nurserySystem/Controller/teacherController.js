exports.getAllteachers=(request,response)=>{
    console.log(request.query);
    console.log(request.params);
    response.status(200).json({data:[]});
}

exports.addteacher=(request,response,next)=>{
    response.status(201).json({data:"added"});
}

exports.updateteacher=(request,response)=>{
    response.status(200).json({data:"update"});
}
exports.deleteteacher=(request,response)=>{
    response.status(200).json({data:"delete"});
}

exports.getteacher=(request,response)=>{
    response.status(200).json({data:request.params.id});
}