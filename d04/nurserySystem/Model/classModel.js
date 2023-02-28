const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    supervisor: {
        type: mongoose.Schema.Types.ObjectId, ref: "teacher"
    },
    children: [{
        type: Number, ref: "child"
    }],
});

schema.plugin(AutoIncrement,{
    id: 'class_model_id_counter',
    inc_field: "_id"
});

mongoose.model("classes", schema);
