$(function(){
    $("input[name='name']").on("keypress", function (e) {
        // when user press enter
        if(e.keyCode==13){
            //remove default form action
            $("form").on("submit", function (event) {
                event.preventDefault();
            })
            //add li element
            let val = $("input[name='name']").val();
            $('#list1').append(`<li> ${val} </li>`);
            // return input to empty string
            $("input").val(""); 
        }
    })
    // add style when click on li from list1
    $("#list1").on("click","li",function(){
        $(this).toggleClass("selected");
    })
    // add style when click on li from list2
    $("#list2").on("click","li",function(){
        $(this).toggleClass("selected");
    })

    // add in list2 and remove selected class
    $("#to-list2").on("click",function(){
        $("#list2").append($("#list1 li.selected").toggleClass("selected"));
    })

    // add in list1 and remove selected class
    $("#to-list1").on("click",function(){
        $("#list1").append($("#list2 li.selected").toggleClass("selected"));
    }) 

})