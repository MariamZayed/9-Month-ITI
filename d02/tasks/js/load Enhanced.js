$(function(){
    $("#json").on("click",function(){
        $.ajax({
            type: "get",
            url: "../Data/complecatedData.json",
            success:function(res){
                let idea = JSON.stringify(res);
                $('textarea').text(idea);

            }
        }); 
    })
})