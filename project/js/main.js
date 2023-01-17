$(function(){
    // validate
    $('[name=id], [name=age], [name=salary]').keypress(function (e) { 
        if(isNaN(e.key) || e.keyCode == 32){
        e.preventDefault();
        }
    });
    $('[name=name]').keypress(function (e) { 
        if((e.keyCode < 65 || e.keyCode > 90) && (e.keyCode < 97 || e.keyCode > 122) && e.keyCode != 32){
        e.preventDefault();
        }
    });


    // press add employee button in display table
    $("#add-btn").on("click",function(){
        $("#add-form").show();
        $("#empData").hide();
        $("#add-btn").hide();
    })

    // Add employee
    $("#add-form").on('submit',function(event){
        event.preventDefault();
        let addEmp = {
            id : $("#add-form input[name='id']").val().trim(),
            name : $("#add-form input[name='name']").val().trim(),
            age : $("#add-form input[name='age']").val().trim(),
            salary : $("#add-form input[name='salary']").val().trim()
        }
        if(addEmp.id == '' || addEmp.name == '' || addEmp.age == '' || addEmp.salary == ''){
            $('#add-form .error').text("invalid data")
            return;
        }else{
            $('#add-form .error').text("")
        }
        $.ajax({
            type:"post",
            url: "http://localhost:3000/emp",
            data: addEmp,
            success: function (data) {
                let tr = document.createElement("tr");
                for (prop in data) {
                    let td = document.createElement("td");
                    $(td).text(data[prop]);
                    $(tr).append(td);
                }
                let td = document.createElement("td");
                let btn = document.createElement("button");
                $(btn).text("delete").addClass("delete")
                td.append(btn);
                btn = document.createElement("button");
                $(btn).text("update").addClass("update")
                $(td).append(btn);
                $(tr).append(td);
                $("#empData tbody").append(tr);
                $("#add-form").hide();
                $("#empData").show();
                $("#add-btn").show();
            },
            error: function(){
                $('#add-form .error').text("id must be unique");
            }
        })
    })

    // Add employee
    $("#edit-form").on('submit',function(event){
        event.preventDefault();
        let addEmp = {
            id : $("#edit-form input[name='id']").val().trim(),
            name : $("#edit-form input[name='name']").val().trim(),
            age : $("#edit-form input[name='age']").val().trim(),
            salary : $("#edit-form input[name='salary']").val().trim()
        }
        if(addEmp.id == '' || addEmp.name == '' || addEmp.age == '' || addEmp.salary == ''){
            $('#edit-form .error').text("invalid data")
            return;
        }else{
            $('#edit-form .error').text("")
        }
        $.ajax({
            type:"put",
            url: "http://localhost:3000/emp/" + addEmp.id,
            data: addEmp,
            success: function (data) {
                $('#empData tbody td:first-child').each(function(){
                    if($(this).text() == data.id){
                        let tds = $(this).parents("tr").find('td');
                        tds[1].innerText = data.name;
                        tds[2].innerText = data.age;
                        tds[3].innerText = data.salary;
                    }
                })
                $("#edit-form").hide();
                $("#empData").show();
                $("#add-btn").show();
            },
            error: function(){
                $('#edit-form .error').text("id must be unique");
            }
        })
    })
    
    // Display employees
    $.ajax({
        type:"get",
        url: "http://localhost:3000/emp",
        success:function(res){
            $("#empData").append("<thead><td>ID</td><td>Name</td><td>Age</td><td>Salary</td><td>Action</td></thead><tbody></tbody>")
            res.forEach(element => {
                let tr = document.createElement("tr");
                for (prop in element) {
                    let td = document.createElement("td");
                    $(td).text(element[prop]);
                    $(tr).append(td);
                }
                let td = document.createElement("td");
                let btn = document.createElement("button");
                $(btn).text("delete").addClass("delete")
                td.append(btn);
                btn = document.createElement("button");
                $(btn).text("update").addClass("update")
                $(td).append(btn);
                $(tr).append(td);
                $("#empData tbody").append(tr);
            })
        }
    })

    //Delete employee record
    $('table').on('click', '.delete', function(){
        let tr = $(this).parents("tr");
        $.ajax({
            type:"delete",
            url: "http://localhost:3000/emp/" + tr.find("td:first").text(),
            success:function(res){
                tr.remove();
            }
        })
    });

    // edit pre-vaules refill
    $('table').on('click', '.update', function(){
        let tr = $(this).parents("tr").find('td');
        $('#edit-form [name=id]').val($(tr[0]).text());
        $('#edit-form [name=name]').val($(tr[1]).text());
        $('#edit-form [name=age]').val($(tr[2]).text());
        $('#edit-form [name=salary]').val($(tr[3]).text());
        $('#edit-form').show();
        $("#empData").hide();
        $("#add-btn").hide();
    });

    //deleting confirm message
    $("#empData").on("click", ".delete", function () {
        if (confirm("are you sure you want to delete this record?")) {
        let id = $(this).parents("tr").find("td:first").text();
        deleteTr(id);
        }
    });
    
})