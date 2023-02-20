const express = require("express");
const router = express.Router();
const validateMW = require("../Core/validations/validateMW");
const controller = require("../Controller/childController");
const validationArray = require("../Core/validations/childValidation/validationArray");
const validationUpdateArray = require("../Core/validations/childValidation/validationUpdateArray");

router
    .route("/childern")
    .get(validationArray,controller.getAllChildern)
    .post(validationArray,validateMW,controller.addchild)
    .patch(validationUpdateArray,validateMW,controller.updatechild)
    .delete(controller.deletechild);

module.exports = router;
