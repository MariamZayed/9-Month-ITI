const express = require("express");
const router = express.Router();
const controller = require("../Controller/childController");
const validateMW = require("../Core/validations/validateMW");
const childValidation = require("../Core/validations/childValidation");
const auth = require('../Middleware/auth');

router.route("/childern")
    .all(auth, auth.checkAdmin)
    .get(controller.getAllChildern)
    .post(childValidation.post,validateMW,controller.addChild)
    .patch(childValidation.update,validateMW,controller.updateChild)
    .delete(childValidation.delete,validateMW,controller.deleteChild);

module.exports = router;
