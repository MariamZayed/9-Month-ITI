const express = require("express");
const router = express.Router();
const validateMW = require("./../Core/validations/validateMW");
const controller = require("./../Controller/teacherController");
const validationArray = require("../Core/validations/teacherValidation/validationArray");
const validationUpdateArray = require("../Core/validations/teacherValidation/validationUpdateArray");

router
    .route("/teachers")
    .get(controller.getAllteachers)
    .post(validationArray,validateMW,controller.addteacher)
    .patch(validationUpdateArray,validateMW,controller.updateteacher)
    .delete(controller.deleteteacher);//need id ?


module.exports = router;
