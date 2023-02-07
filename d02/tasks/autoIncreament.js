//3-auto increament

db.createCollection("counters")
db.counters.insertOne({"idInstructors":1})

let instrcutorId = db.counters.findOne().idInstrcutors;
db.instructors.insertOne({"_id":instrcutorId} );
db.counters.updateOne(
                        {},
                        {
                         $inc:{idInstructors:1}
                        },
                        {}
                     )
