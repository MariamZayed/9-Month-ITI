let nameValidation = function(student_name){
    //check if not name empty
    while(student_name.length==0)
        console.log("enter your name");
    
    //Captlize first letter
    let split_student_name = student_name.split(" ");
    for(let i=0;i<split_student_name.length;i++){
        let split_studen_letters = split_student_name[i].split(""); 
        split_studen_letters[0] = split_studen_letters[0].toUpperCase();
        split_student_name[i] = split_studen_letters.join("");
    }
    split_student_name = split_student_name.join(" ");
    return split_student_name;
}

let gradeValidation = function(student_grade){
    //check if grade between 0:100
    let num = Number(student_grade);
    // console.log(typeof(num));
    if(num<0 || num>100){
        console.log("please enter grade between 0 and 100");
    }
    return student_grade;
}

let filterStudent = function(){
    let select_botton = document.querySelector("option:checked").value;
    let rowCount = document.querySelector("#studentsData").rows.length;
    
    if(select_botton == "all"){
        for(let i=1;i=rowCount;i++){
            let students_arr = document.querySelector(`#studentsData td:nth-child(${i})`).innerText;
            console.log(students_arr);
        }
    }       
}