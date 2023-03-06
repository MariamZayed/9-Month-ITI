const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const teacherSchema = mongoose.model("teachers");

exports.login = (request, response, next) => {
teacherSchema.findOne({email:request.body.email})
    .then(teachers=>{
        if(teachers == null)
            throw new Error("Not Found");
        let result = bcrypt.compareSync(request.body.password, teachers.password)
        if (!result) 
            throw new Error("Wrong email or password");
        else {
            if(teachers._id == "6405e1d5aba24ed841f6fe51"){
            request.role="admin";
            }
            else
                request.role="teachers";
            let token = jwt.sign(
                {id:teachers._id, role:request.role}, 
                process.env.SECRET_KEY,
                {expiresIn: "24h"}
            );
            response.status(200).json({token:token,"message":"Authorized"});
        }
    })
    .catch(error=>{
        error.status=401;
        next(error);
    });
}