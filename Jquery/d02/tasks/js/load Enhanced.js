$(function(){
    $("#json").on("click",function(){
        $.ajax({
            type: "get",
            url: "../Data/complecatedData.json",
            success:function(res){
                //convert json tor text
                let json_string = JSON.stringify(res);
                $('textarea').text(idea);
            }
        }); 
    })
})