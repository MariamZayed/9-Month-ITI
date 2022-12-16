// let result2 = printVariables(10,20,30);

// function printVariables(value1,value2,value3){
//     let arr=[value1,value2,value3];
//     return arr;
// }

// function printVariables(value1,value2,value3=0){
//     let arr=[value1,value2,value3];
//     return arr;
// }

// function printVariables(value1,value2,value3){
//     let arr=[value1,value2,value3];

//     for(let i=arr.length;i<=arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
 
// let localVar=90;
// function myfun(){
//     console.log(localVar);
//     localVar=3;
//     testingVar=5;
// }

// let localVar=90;
// let myfun = function(){
//     console.log(localVar);
//     var localVar=3;
//     testi ngVar=5;
// }

// let localVar=90;
// let myfun = () =>{
//     console.log(localVar);
//     localVar=3;
//     testingVar=5;
// }

let getUserName=function(){
    let splite_user_name =[]
    let user_name="";
    

    do{
        user_name = prompt("enter user_name");
        splite_user_name = user_name.split('');
    }
    while(isNaN(splite_user_name)){
        user_name= prompt("enter user_name, only letters.. no numbers");
    }
    
    console.log(splite_user_name);
}

// let getStudent=function(){
//     let students_arr=[];
//     let stusent_split_arr=[];
//     let students_num= prompt("enter number of students");

//     for(let i=0;i<students_num.length; i++){
//         students_arr[i]= prompt("enter student data of number "+(i+1));
//         student_split_arr=students_arr[i].split(",");
//         for(let i =0;i<student_split_arr.length;i++){
//             student_split_arr[i]=student_split_arr[i].trim();
//         }
//         while(!isNaN(student_split_arr[0])){
//             student_split_arr[0]= prompt("plz enter a name! you didnt enter any name")
//         }
//         students_arr[i]= student_split_arr.toString();
//         while(isNaN(Number(student_split_arr[1]))){
//             student_split_arr[1] = prompt("enter grade as a number, you entered a string!");
//         }
//         students_arr[i]= student_split_arr.toString();
//         while((/^\S+@\S+\.\S+$/.test(student_split_arr[2]))==false){
//             student_split_arr[2] = prompt("enter a valid email address, you entered bad one");
//         }
//         students_arr[i]= student_split_arr.toString();  
//         while(student_split_arr[3]!= "OS"&& student_split_arr[3]!="SD" && student_split_arr[3]!= "AI"){
//             student_split_arr[3] = prompt("plz enter correct track");
//         }
//         students_arr[i]= student_split_arr.toString();
//         console.table(students_arr);
//     }
// }























