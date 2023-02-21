    const { body, param, query } = require("express-validator");

    module.exports = [
        body("id")
            .optional()
            .isInt()
            .withMessage("id should be integer"),
        body("fullname")
            .optional()
            .isAlpha()
            .withMessage("name should be string")
            .isLength({ max: 10 })
            .withMessage("name <10"),
        body("supervisor")
            .optional()
            .isNumeric()
            .withMessage("Enter a valid supervisor ref"),
        body("children")
            .optional()
            .isArray()
            .withMessage("Enter an array of children"),
        body("children.*")
            .optional()
            .isInt()
            .withMessage("Invalid children Ids")
    ];