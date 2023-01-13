$(function () {



    $("#dtText").on("click", function () {
        $.ajax({
            type: "get",
            url: "Data/text.txt",//===>Requset===>URL Local
            success: function (res) {
                console.log("Done");
                console.log(res);
                $("#dataContent").text(res);
            }
        });
    })
    $("#dtJson").on("click", function () {
        $.ajax({
            type: "get",
            url: "Data/DataObject.json",//===>Requset===>URL Local
            success: function (res) {
                console.log("Done");
                console.log(res);
                $("#dataContent").text(res);
            }
        });
    })
    $("#dtXMl").on("click", function () {
        $.ajax({
            type: "get",
            url: "Data/Documents.xml",//===>Requset===>URL Local
            success: function (res) {
                debugger;
                console.log("Done");
                console.log(res);
                $("#dataContent").text(res);
            }
        });
    })
    $("#dtJSONP").on("click", function () {
        $.ajax({
            type: "get",
            url: "https://jsonplaceholder.typicode.com/comments",//===>Requset===>URL Local
            success: function (res) {
                debugger;
                console.log("Done");
                console.log(res);
                $("#dataContent").text(res);
            }
        });
    })
    $("#dtJSONPPost").on("click", function () {
        $.ajax({
            type: "post",
            url: "https://jsonplaceholder.typicode.com/comments",//===>Requset===>URL Local,
            data: { "id": 10001, "body": 'Post from ITI' },
            success: function (res) {
                debugger;
                console.log("Done");
                console.log(res);
                $("#dataContent").text(res);
            }
        });
    })
    $("#GetData").on("click", function () {
        $.ajax({
            type: "get",
            url: "http://localhost:3000/students",//===>Requset===>URL Local,
            success: function (res) {
                console.log(res);
                $("#dataContent").text(res);
                CreateTr(res);
            }
        });
    })

    function CreateTr(DataArrayObject) {
        DataArrayObject.forEach(element => {
            let newTr = document.createElement("tr");
            for (prop in element) {
                let newTd = document.createElement("td");
                $(newTd).text(element[prop]);
                $(newTr).append(newTd);

            }
            $("#_tbl").append(newTr);
        });
    }

    $("#GetData").trigger("click");

    $("#Showing").on("click", function () {
        $("#addForm").css({
            display: 'block'
        })
        $("#_tbl").css({
            display: 'none'
        })
    })

    $("#SavingAdd").on("click", function () {
        //1-get All inputs Values

        //2-crate object
        let newObject = {
            id: $("#txtid").val(),
            Name: $("#txtName").val(),
            Age: $("#txtage").val()
        }
        //post ajax req
        $.ajax({
            url: 'http://localhost:3000/students',
            type: 'post',
            data: newObject,
            success: function (res) {
                console.log("Done")
                console.log(res);
                $("#GetData").trigger("click");
                $("#_tbl").css({
                    display: 'block'
                });
                $("#addForm").css({
                    display: 'none'
                })
            }
        })

    })

    $("#Remove").click(function () {
        $.ajax({
            url: 'http://localhost:3000/students/15',
            type: 'DELETE',
            success: function (re) {
                console.log(re);
            },
            catch: function (Error) {
                console.log(Error)
            }
        })
    })

});//end of page loading