const { body, param, query } = require("express-validator");

exports.post = [
    body("name")
        .isString()
        .withMessage("name should be string")
        .isLength({ max: 10 })
        .withMessage("name <10"),
    body("supervisor")
        .isNumeric()
        .withMessage("Enter a valid supervisor ref"),
    body("children")
        .isArray()
        .withMessage("Enter an array of children"),
    body("children.*")
        .isInt()
        .withMessage("Item Must Be Integer"),
];

exports.update = [
    body("id").isInt().withMessage("Id Shoud be Number"),
    body("name")
        .optional()
        .isString()
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
    .withMessage("Item Must Be Integer"),
];

exports.delete = [
    body("id").isInt().withMessage("Id Shoud be Number")
]