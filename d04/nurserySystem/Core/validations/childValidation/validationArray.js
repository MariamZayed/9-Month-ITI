const { body, param, query } = require("express-validator");

module.exports = [
    body("fullName")
        .isAlpha()
        .withMessage("fullName should be string")
        .isLength({ max: 30 })
        .withMessage("child name < 10"),
    body("level")
        .isIn(["PREKG", "KG1", "KG2"])
        .withMessage("You should select one of existed levels"),
    body("age")
        .isInt()
        .withMessage("Age should be Number"),
    body("address.city").isString().withMessage("Invalid city"),
    body("address.street").isString().withMessage("Invalid street"),
    body("address.building").isNumeric().withMessage("Invalid bulding")

];
