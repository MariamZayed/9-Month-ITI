const { body, param, query } = require("express-validator");

exports.post = [
    body("fullName").isString().withMessage("Full Name must be string"),
    body("email").isEmail().withMessage("Email Invalid Format"),
    body("image").isString().withMessage("image Invalid Must be String"),
];

exports.update = [
    body("id").isMongoId().withMessage("Id Shoud be Object"),
    body("fullName").optional().isString().withMessage("Full Name must be string"),
    body("email").optional().isEmail().withMessage("Email Invalid Format"),
    body("image").optional().isString().withMessage("image Invalid Must be String"),
];

exports.delete = [
    body("id").isMongoId().withMessage("Id Shoud be Object"),
]