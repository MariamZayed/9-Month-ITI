//a
//db.instructors.aggregate([
        // {
        //     $project:{ fullName:{$concat:["$firstName"," ","$lastName"]}}
        // }//stage1
//])

//b
//db.students.aggregate([
//    {
//        $lookup:{
//            from:"departments",
//            localField:"department",
//            foreignField:"_id",
//            as:"department"
//        }
//    },//stage 1
//    {
//        $project:{
//            fullName:{$concat:["$firstName"," ","$lastName"]},
//            departmentNname:"$department.name"
//        }
//    }//stage 2
//])

//c
//db.students.aggregate([
//          {
//        $project:{
//            fullName:{$concat:["$firstName"," ","$lastName"]},
//            Address:"$addresses.city"
//        }
//    }//stage 2  
//])

//d
//db.students.aggregate([
//          {
//        $project:{
//            fullName:{$concat:["$firstName"," ","$lastName"]},
//            Subject:"$subjects"
//        }
//    }//stage 2  
//])

//e
//db.students.aggregate([
//    {
//            $lookup:{
//            from:"subjects",
//            localField:"subjects",
//            foreignField:"_id",
//            as:"subjects"
//        }
//    },//stage1
//    {
//        $project:{
//            fullName:{$concat:["$firstName"," ","$lastName"]},
//            Subjects:"$subjects.name"
//        }
//    },//stage 2
//    {
//        $match:{
//            Subjects:"jquery"
//        }
//    }//stage 3
//])
//
//








