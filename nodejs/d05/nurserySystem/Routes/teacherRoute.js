const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const controller = require("./../Controller/teacherController");
const validateMW = require("./../Core/validations/validateMW");
const teacherValidation = require("../Core/validations/teacherValidation");
const auth = require('../Middleware/auth');

const upload = multer({ 
    fileFilter: (request, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error("file should be Image only."));
        }
    } ,
    storage: multer.diskStorage({
        destination:(request, file, cb) => {
            cb(null, path.join(__dirname,"..","images","teacher"));
        },
        filename: (request, file, cb) => {
            let ext = path.extname(file.originalname);
            let fileName = path.basename(file.originalname, ext);
            let finalName =  file.fieldname + '-' + fileName + '-' + Date.now() + ext
            cb(null, finalName);
        }
    }),
});

router
    .route("/teachers")
    .all(auth)
    .get(auth.checkAdmin, controller.getAllteachers)
    .post(auth.checkAdminOrTeacher, upload.single('image'),teacherValidation.post,validateMW,controller.addteacher)
    .patch(auth.checkAdminOrTeacher, upload.single('image'),teacherValidation.update,validateMW,controller.updateteacher)
    .delete(auth.checkAdmin, teacherValidation.delete,validateMW,controller.deleteteacher);

module.exports = router;
