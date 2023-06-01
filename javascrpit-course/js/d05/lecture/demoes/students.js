window.addEventListener("load",function(){
    let addButton=this.document.querySelector("input[value=Add]");
    let nameTxtBox=document.querySelector("input[name=studentName]");
    
    let tableData=document.querySelector("table#studentsData");

    //action adding
    addButton.onclick=function(){
        let trObject=document.createElement("tr");//<tr></tr>
        let tdObject=document.createElement("td");//<td></td>
        tdObject.innerText=nameTxtBox.value;
        trObject.append(tdObject);
        tableData.append(trObject);

        tdObject=document.createElement("td");//<td></td>
        let deleteButton=document.createElement("button");
        deleteButton.innerText="delete";
        deleteButton.onclick=function(){
            this.parentElement.parentElement.remove()
        }
        tdObject.append(deleteButton);
        trObject.append(tdObject);

        //department
        let departmentValue=document.querySelector("input[name=Department]:checked").value;
        
        trObject.classList.add(departmentValue); 

    };//add



});//load