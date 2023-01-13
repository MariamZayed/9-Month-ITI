$(function () {

    //On
    //1
    // $("li").on("click", function () {
    //     $(this).css({
    //         backgroundColor: 'lightgreen'
    //     })
    // })
    //2
    // $("li").on({
    //     "click": function () { alert("hi"); },
    //     "mouseover": function () {
    //         $(this).toggleClass("active")
    //     }
    // })
    //3
    $("#txtName").on("keydown", function (e) {
        console.log(this);
        console.log(e);
        $("#sp").text("Code: " + e.keyCode + " Char:" + e.key);
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            e.preventDefault();
        }
    })
    //4-
    $("li").on("mouseover mouseout click", function () {
        $(this).toggleClass("active");
        //  alert("HIIIIIIIIIII");
        console.log(this);
    })
    //5 delegation
    $("#example").on("click", "p", function () {
        // let newPar="<p>Welcome new one .........</p>";
        // $("#example").append(newPar);
        alert("HIIIIIIIIIIIII");
        $(this).addClass("clicked");
        console.log(this);

    })
    $("#btncreate").on("click", function () {
        let newPar = "<p>Welcome new one .........</p>";
        $("#example").append(newPar);
    })
    // $("p").click(function(){
    //     alert("hi");

    // })
    $("#btnMove").on("click",function(){
        // let clickedP=$(".clicked");
        // $("body").append(clickedP);
        $("li").trigger("click");

    })

    $("li").click(function(){
        $(this).animate({
            marginLeft:'120px',
            opacity:'0.4'
        },500);
    })
    //trigger

    




});//end of page loading
