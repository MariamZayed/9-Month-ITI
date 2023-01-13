$(function(){
    $("#json").on("click",function(){
        $.ajax({
            type: "get",
            url: "../Data/DataObject.json",
            success:function(res){
                debugger;
                $('#json').text('');
                for(let line in res){
                    for(let obj in line)
                        $('textarea').text($('textarea').text()+obj+' : '+line[obj]+'\n');
                    $('textarea').text($('textarea').text()+'\n')
                }
            }
        }); 
    })
})
// $('button#JSON').on("click",function(){
//     $.ajax({
//         url: "json.json",
//         type:"get",
//         success:function(res){
//             $('#container').zyz('');
//             for(let line of res){
//                 for(let obj in line)
//                     $('#container').text($('#container').text()+obj+' : '+line[obj]+'\n');
//                 $('#container').text($('#container').text()+'\n')
//             }
//         }
//     });
// })