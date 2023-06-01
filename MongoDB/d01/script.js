//db.instractors.insertOne({"_id":1,"firstName":"Mariam","lastName":"Zayed","age":23})

//db.instructors.find()
//db.instructors.find({})
//db.instructors.findOne()
//db.instructors.find().constructor.name
//
//db.instructors.find({}, {firstName: 1 ,address: 1 }) ; 
//
//
//let max = 0 ; 
//let min = 0 ; 
//db.instructors.find({}, { salary: 1, _id: 0 }).forEach(function (user)
// { if (user.salary > max){
//      max= user.salary; 
//      } 
// })
// db.instructors.find({}, { salary: 1, _id: 0 }).forEach(function (user)
// { if (user.salary > min) { min = user.salary; } })
//
//print(max , min) ; 