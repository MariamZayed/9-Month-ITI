const { body, param, query } = require("express-validator");

module.exports = [
    body("id").optional().isInt().withMessage("teacher Id should be integer"),
    body("fullName")
        .isAlpha()
        .optional()
        .withMessage("fullName should be string")
        .isLength({ max: 10 })
        .withMessage("teacher name <10"),
    body("email")
        .optional()
        .isAlpha()
        .withMessage("email should be string"),
    body("image")
        .isAlpha()
        .optional()
        .withMessage("image should be string")

];
