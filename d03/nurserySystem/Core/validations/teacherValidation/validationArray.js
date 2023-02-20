const { body, param, query } = require("express-validator");

module.exports = [
    body("id").isInt().withMessage("teacher Id should be integer"),
    body("fullName")
        .isAlpha()
        .withMessage("fullName should be string")
        .isLength({ max: 10 })
        .withMessage("teacher name <10"),
    body("email")
        .isAlpha()
        .withMessage("email should be string"),
    body("image")
        .isAlpha()
        .withMessage("image should be string")

];
