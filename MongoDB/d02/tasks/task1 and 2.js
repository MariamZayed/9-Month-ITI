//let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
//                age:21,salary:3500,
//                address:{city:"cairo",street:10,building:8},
//                courses:["js","mvc","signalR","expressjs"]},
//                
//                {_id:7,firstName:"mona",lastName:"ahmed",
//                age:21,salary:3600,
//                address:{city:"cairo",street:20,building:8},
//                courses:["es6","mvc","signalR","expressjs"]},
//                
//                {_id:8,firstName:"mazen",lastName:"mohammed",
//                age:21,salary:7040,
//                address:{city:"Ismailia",street:10,building:8},
//                courses:["asp.net","mvc","EF"]},
//                
//                {_id:9,firstName:"ebtesam",lastName:"hesham",
//                age:21,salary:7500,
//                address:{city:"mansoura",street:14,building:3},
//                courses:["js","html5","signalR","expressjs","bootstrap"]}
//            ];
//            
//db.instractors.insertMany(instructorsArray); 


//a
//db.instractors.find();

//b
//db.instractors.find({salary:{$gt:4000}},{firstName:1,"address.city":1});

//c
//db.instractors.find({age:{$lte:25}});

//d
//db.instructors.find(
//                    {"address.city": "mansoura",
//                     "address.street": {$in:[14, 10]}},
//                    {"firstName": 1, "address": 1, "salary": 1}
//                   )

////e
//db.instructors.find({"courses": {$all: ["js", "jquery"]}})

//f

//g
//db.instructors.find(
//                        {
//                            "firstName": {$exists: true},
//                            "lastName":  {$exists: true}
//                        },
//                        {"firstName": 1, "lastName": 1, "age":1}
//                   ).sort({firstName:1,lastName:-1})

//h
//db.instructors.deleteOne({"firstName": "ebtesam", "courses": {$size: 5}})

////i
//db.instructors.updateMany(
//                    {},
//                    {$set:{active:true}},
//                    {}
//                   )

//j
//db.instructors.updateOne(
//                    {firstName:"mazen",lastName:"mohammed",courses:"EF"},
//                    { $set:{"courses.$":"jquery"}},
//                    {}
//                   )

//k
//db.instructors.updateOne(
//                            {firstName:"noha",lastName:"hesham"},
//                            {$push:{courses:"jquery"}},
//                            {}//                         )


//l
//db.instructors.updateOne(
//                            {firstName:"“ahmed",lastName:"mohammed"},
//                            {$unset:{courses:""}},
//                            {}
//                         )
      
//m
//db.instructors.updateOne(
//                            {courses:{$size: 3}},
//                            {$inc:{salary:-500}},
//                            {}
//                        )

//n
//db.instructors.updateMany(
//                            {},
//                            {$rename:{address:"fullAddress"}},
//                            {}
//                          )
  
//o
//db.instructors.updateMany(
//                            {firstName:"noha",lastName:"hesham"},
//                            {$set:{"address.street":20}},
//                            {}
//                          )

//2

//db.createCollection("workers", {   
//    
//    validator:{
//
//            $jsonSchema:{
//
//                    bsonType:"object",
//
//                    required:["fullName","salary","age"],
//
//                    additionalProperties:false,
//
//                    properties:{
//                        
//                        _id:{bsonType: "number"},    
//
//                        fullName:{bsonType:"string"},
//
//                        salary:{
//                                    bsonType:"number",
//                                    minimum: 2000
//                               },
//
//                        age:{ 
//                                    bsonType:"number",
//                                    minimum: 25,                   
//                                    maximum: 45
//                            },
//                        location:{
//                                    bsonType: "array",  
//                                    minItems: 1,                     
//                                    uniqueItems: true,                     
//                                    items: {                         
//                                            bsonType: "string"                            
//                                           }                        //                                }
//
//                        }//properties
//
//                }//jsonSchma
//
//        }//validator
//
//    });
//db.workers.insertOne({_id: 2, "fullName": "Mariam Zayed", "salary": 8000, "age": 22})
//
//
//
//db.workers.find()
