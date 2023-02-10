//a
//db.employee.aggregate([
//  {
//    $lookup: {
//      from: "department",
//      localField: "department_id",
//      foreignField: "department_id", 
//      as: "departments",
//    },
//  },
//  {
//    $project: {
//      _id: 0,
//      fullName: { $concat: ["$first_name", " ", "$last_name"] },
//      department: "$departments.department_description",
//    },
//  },
//])

////b
//db.employees.aggregate([//no join
//        {
//            $lookup:{
//                from:"postion",
//                localField:"postion_id",
//                foreignField:"postion_id",
//                as:"postion"
//            }
//        },//stage 1
//        {
//            $match:{
//                       position_title: "VP Country Manager"
//                   }
//        },//stage 2
//        {
//            $project:{ 
//                        FullName:{$concat:["$firstName"," ","$lastName"]},
//                        Salary:"$salary"
//                    }
//        }//stage 3
//])

//c
//db.customer.aggregate([
//  {
//    $lookup: {
//      from: "region",
//      localField: "address.customer_region_id",
//      foreignField: "region_id",
//      as: "region",
//    },
//  },
//  {
//    $project: {
//      _id: 0,
//      FullName: { $concat: ["$fname", " ", "lname"] },
//      Region: "$region.sales_region",
//    },
//  },
//]);

//d
//db.product.find({brand_name: "Washington"})






