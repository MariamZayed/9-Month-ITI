window.addEventListener("load",function(){
    let name_txt_box = document.querySelector("input[name=studentName]");
    let grade_txt_box = document.querySelector("input[name=studentGrade]");
    let data_table = document.querySelector("table#studentsData");
    let add_button = this.document.querySelector("input[value=Add]");

    add_button.onclick=function(){
        let tr_obj = document.createElement("tr");
        let td_obj = document.createElement("td");
        let delete_button = document.createElement("button");

        td_obj.innerText = name_txt_box.value;

        // name validation function and printing
        let valid_name = nameValidation(td_obj.innerText);
        td_obj.innerText = valid_name;
        tr_obj.append(td_obj);
        data_table.append(tr_obj);
        
        //grade evaluation and printing
        td_obj= document.createElement("td");
        td_obj.innerText = grade_txt_box.value;
        let valid_garde = gradeValidation(td_obj.innerText);
        console.log(valid_garde);
        // td_obj.innerText = valid_garde;
        tr_obj.append(td_obj);

        td_obj= document.createElement("td");
        delete_button.innerText= "delete";
        delete_button.onclick= function(){
            this.parentElement.parentElement.remove();
        };
        td_obj.append(delete_button);
        tr_obj.append(td_obj);

        let department_value = document.querySelector("input[name=Department]:checked").value;
        tr_obj.classList.add(department_value);



    }
});