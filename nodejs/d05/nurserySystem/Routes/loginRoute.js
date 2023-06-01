const express=require("express");
const loginController=require("../Controller/loginController");
const loginValidation = require("../Core/validations/loginValidation");

const router=express.Router();

router.route("/login")
    .post(loginValidation.post,loginValidation,loginController.login);

module.exports=router;