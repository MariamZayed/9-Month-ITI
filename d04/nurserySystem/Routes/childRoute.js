const express = require("express");
const router = express.Router();
const controller = require("../Controller/childController");
const validateMW = require("../Core/validations/validateMW");
const validationArray = require("../Core/validations/childValidation/validationArray");
const validationUpdateArray = require("../Core/validations/childValidation/validationUpdateArray");

router.route("/child")
    .get(controller.getAllChildern)
    .post(validationArray,validateMW,controller.addChild)
    .patch(validationUpdateArray,validateMW,controller.updateChild)
    .delete(controller.deleteChild);

module.exports = router;
