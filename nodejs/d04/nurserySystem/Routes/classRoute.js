const express = require("express");
const router = express.Router();
const controller = require("./../Controller/classController");
const validateMW = require("./../Core/validations/validateMW");
const classValidation = require("../Core/validations/classValidation");

router
    .route("/classes")
    .get(controller.getAllClasses)
    .post(classValidation.post,validateMW,controller.addClass)
    .patch(classValidation.update,validateMW,controller.updateClass)
    .delete(classValidation.delete,validateMW,controller.deleteClass);


module.exports = router;
