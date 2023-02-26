const express = require("express");
const router = express.Router();
const validateMW = require("./../Core/validations/validateMW");
const controller = require("./../Controller/classController");
const validationArray = require("../Core/validations/classValidation/validationArray");
const validationUpdateArray = require("../Core/validations/classValidation/validationUpdateArray");

router
    .route("/classes")
    .get(validationArray,controller.getAllClasses)
    .post(validationArray,controller.addClass)
    .patch(validationUpdateArray,validateMW,controller.updateClass)
    .delete(controller.deleteClass);//need id ?


module.exports = router;
