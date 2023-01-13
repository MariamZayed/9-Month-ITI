$(function () {

    // // $("li").bind("click", function () {
    // //     $(this).toggleClass("active");

    // // })
    // // $("li").bind("click mouseover", function () {
    // //     $(this).toggleClass("active");

    // // })
    // // $("li").bind({
    // //     "click": function () {
    // //         alert($(this).text());
    // //     }
    // //     , "mouseover": function () {
    // //         $(this).toggleClass("active");
    // //     }
    // // })
    // $("div").delegate("p", "click", function () {
    //     $("#example").append(`<p class="active">new Paragraph</p>`);
    // });
    // $("li").on({
    //     "click": function () {
    //         alert(this.innerText);
    //     },
    //     "mouseover": function () {
    //         $(this).toggleClass("active")
    //     }
    // })

    $("#example").on("click", "p", function () {
        alert("HIIIIIII");
        console.log(this);
    })
    $("#btncreate").click(function () {
        $("#example").append(`<p class="active">Welcome New</p>`);
    });
    $("#three").click(function () {
        alert("Welcomeeeeeeeeeeeeeeeeeeee");
    })

    let Counter = 3;
    $("#three").on("click", function () {
        Counter--;
        if (Counter >= 0) {

            $(this).val(Counter)
        }
        else {
            $(this).off("click");
        }
    })
    $("#EOW").click(function () {
        $("li").trigger("click");
    })

    $("#txtName").on("keypress", function (e) {
        console.log(e);
        console.log(e.keyCode);
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            e.preventDefault();
            $("#sp").text("this input accept chars only");
        }
        else {
            $("#sp").text("");
        }
    });//End OF Keypress

    // $("body").keydown(function (e) {
    //     console.log(e.keyCode);
    //     switch (e.keyCode) {
    //         case 40:
    //             $("body").css({
    //                 backgroundColor: 'green'
    //             });
    //             break;
    //         case 39:
    //             $("body").css({
    //                 backgroundColor: 'red'
    //             });
    //             break;
    //         case 37:
    //             $("body").css({
    //                 backgroundColor: 'yellow'
    //             });
    //             break;
    //         case 38:
    //             $("body").css({
    //                 backgroundColor: 'blue'
    //             });
    //             break;
    //     }

    // });

    $("li").click(function () {
        $(this).animate({
            width: '+=200px',
            height: '+=100px',
            opacity: '-=0.5',
            marginLeft: '+=100px',

        }, 1000, "linear", function () {
            alert("HIIIIIIIIII");
        });
    })
});//end of page loading