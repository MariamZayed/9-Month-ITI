$(function(){
    $.ajax({
        type:"get",
        url: "../data/data.json",
        success:function(res){
            // let size = Object.keys(res.emp).length;
            
            function displayEmp(){
                for (let i in res) {
                    if(i!=0){
                        $("#empData").append("<thead><td>ID</td><td>Name</td><td>Age</td><td>Salary</td></thead>")
                        res[i].forEach(element => {
                            let tr = document.createElement("tr");
                            for (prop in element) {
                                let td = document.createElement("td");
                                $(td).text(element[prop]);
                                $(tr).append(td);
                            }
                            $("#empData").append(tr);
                            $("#empData").css({display:"inline-block"})
                            })
                    }
                    
                }
            }
            displayEmp();

        }
    })
})