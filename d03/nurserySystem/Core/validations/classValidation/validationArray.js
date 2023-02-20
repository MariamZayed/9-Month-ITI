const { body, param, query } = require("express-validator");

module.exports = [
    body("id").isInt().withMessage("class Id should be integer"),
    body("fullName")
        .isAlpha()
        .withMessage("fullName should be string")
        .isLength({ max: 10 })
        .withMessage("class name <10"),
    body("level")
        .isIn(["PREKG", "KG1", "KG2"])
        .withMessage("You should select one of existed levels"),
    body("age")
        .isInt()
        .withMessage("Age should be Number"),
    body("address").isObject().withMessage("Invalid address"),
        body("address.city").isString().withMessage("Invalid city"),
        body("address.street").isString().withMessage("Invalid street"),
        body("address.bulding").isNumeric().withMessage("Invalid bulding")

];
