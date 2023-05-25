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

    $('#xml').on("click",function(){
        $.ajax({
            type: "get",
            url: "../Data/Documents.xml",
            success: function (res) {
                // convert xml to string
                let xml_string = (new XMLSerializer()).serializeToString(res);
                $('textarea').text(test);
            }  
        });
    })
})