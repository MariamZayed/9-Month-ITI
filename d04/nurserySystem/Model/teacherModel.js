const mongoose=require("mongoose");

// Create Schema object
const schema=new mongoose.Schema({
    _id:Number,
    fullName:String,
    email:String,
    image:String
});

// ODM mapping // Setter // mongoose is single object, no need to export // بيسمع في الاوبجكت 
mongoose.model("teachers",schema); //new name for model

//getter
// const schemaObject= mongoose.model(collectionName);