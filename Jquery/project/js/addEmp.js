$(function(){
    function addEmp(){
        $("button[type='submit']").on('click',function(eventt){
            let addEmp = {
                id : $("input[name='id']").val(),
                name : $("input[name='name']").val(),
                age : $("input[name='age']").val(),
                salary : $("input[name='salary']").val()
            }
            function validateEmpForm(addEmp){
                // validate id only numbers
                if((/^-?\d*\.?\d*$/.test(addEmp.id))){
                     // validate age between 20 and 60
                    if(addEmp.age>20 && addEmp.age<60){
                        $.ajax({
                            type:"post",
                            url: "http://localhost:3000/emp",
                            data: addEmp,
                            success: function () {
                                console.log("Emp Added!");
                                //remove default form action
                                eventt.preventDefault();
                            }
                        })
                    }
                }else{
                    console.log("validation error!");
                }
            
            }
            validateEmpForm();   
        })
    }
    addEmp();
    
})