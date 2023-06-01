const mongoose=require("mongoose");

// Create Schema object
const schema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullName:String,
    email:{
        type: String,
        unique: true
    },
    image:String,
    password: { type: String, required: true, length: {min: 8} }
});

// ODM mapping // Setter // mongoose is single object, no need to export // بيسمع في الاوبجكت 
mongoose.model("teachers",schema); //new name for model

//getter
// const schemaObject= mongoose.model(collectionName);