$(function(){
    $("#json").on("click",function(){
        $.ajax({
            type: "get",
            url: "../Data/DataObject.json",
            success:function(res){
                // console.log(res.registers.length);
                // console.log(res.registers[0]);
                // $('textarea').text(res.registers[0]);
                for(let obj in res){    
                    let record = '';
                    for(let i=0;i<res[obj].length;i++){
                        record = record +  i+' : '+res[obj][i].userName+" " +res[obj][i].password+'\n'; 
                    }
                    $('textarea').text(record);

                }   
            }
        }); 
    })
})