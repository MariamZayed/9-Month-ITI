exports.getAllClasses=(request,response)=>{
    console.log(request.query);
    console.log(request.params);
    response.status(200).json({data:[]});
}

exports.addClass=(request,response,next)=>{
    response.status(201).json({data:"added"});
}

exports.updateClass=(request,response)=>{
    response.status(200).json({data:"update"});
}
exports.deleteClass=(request,response)=>{
    response.status(200).json({data:"delete"});
}

exports.getClass=(request,response)=>{
    response.status(200).json({data:request.params.id});
}