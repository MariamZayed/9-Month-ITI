exports.getAllChildern=(request,response)=>{
    // console.log(request.query);
    // console.log(request.params);
    response.status(200).json({data:[]});
}

exports.getchild=(request,response)=>{
    response.status(200).json({data:request.params.id});
}

exports.addchild=(request,response,next)=>{
    response.status(201).json({data:"added"});
}

exports.updatechild=(request,response)=>{
    response.status(200).json({data:"update"});
}
exports.deletechild=(request,response)=>{
    response.status(200).json({data:"delete"});
}
