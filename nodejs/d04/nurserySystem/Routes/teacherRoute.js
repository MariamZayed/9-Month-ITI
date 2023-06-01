const express = require("express");
const router = express.Router();
const controller = require("./../Controller/teacherController");
const validateMW = require("./../Core/validations/validateMW");
const teacherValidation = require("../Core/validations/teacherValidation");

router
    .route("/teachers")
    .get(controller.getAllteachers)
    .post(teacherValidation.post,validateMW,controller.addteacher)
    .patch(teacherValidation.update,validateMW,controller.updateteacher)
    .delete(teacherValidation.delete,validateMW,controller.deleteteacher);

module.exports = router;
