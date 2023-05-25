
        $(function () {
            //Clearing Data
            //$("ul").hover(function () {
            //    $(this).toggleClass("active");
            //})
            ////$("li:first").empty();//delete element content only
            ////var x = $("ul").remove();//delete element with content and events can recover but without event
            //var x = $("ul").detach();//delete element with content and events but can recover with event
            //$("#del").click(function () {
            //    $("ul").empty();
            //});
            //$("#recover").click(function () {
            //    $("body").prepend(x);
            //})
             //Myli=$("li:first").remove();
            //Traversing
            //$("li").first().css("background-color", "red");//$("li:first")
            //$("li").last().css("background-color", "red");//$("li:first")
            //$("li").eq(2).css("background-color", "red");
            //$("li").eq(-2).css("background-color", "red");
            //$("li").eq(2).css("background-color", "red");
           // $("li").next().css("background-color", "red");;
            //$("li").eq(2).nextAll(":button").eq(0).css("background-color", "red");
            //$("ul:first").nextAll().css("background-color", "red");
            //$("li").parent().css("background-color", "red");;
            //$("ul").children()
            //$("ul").children("li").css("background-color","red");
            //$("ul").children().not("li").css("background-color", "red");;

            //$("#sel1 :selected").each(function () {
            //    alert($(this).text());
            //})
        //   var ims= document.getElementsByTagName("div");
        //   ims.forEach(function(ele,i){
        //       console.log(ele,i);
              
        //   });
          

            // $("#dataTable td").each(function (i,element) {
            //    console.log(element,i);
            //    if($(element).text()=="A"){
            //        $(this).css("backgroundColor","red");
            //    }
            // });
        $("li").animate({
            opacity:"0.4",
            marginLeft:"120px"
        },1000)
            
        })//end of page load


$("document").ready(function () {

   
    //Children();
    //$("#example").children().css("border","2px dotted orange");
    //$("#example").children("div").css("border","2px dotted orange");
    
    
    elm=$("#para1");
    //next only get next element 
    //elm.next().css("border","2px dotted orange");
    //elm.next("div").css("border","2px dotted orange");
    //elm.nextAll().css("border","2px dotted orange");
    //elm.nextAll("div").css("border","2px dotted orange");
    //elm.prev().css("border","2px dotted orange");
    //elm.parent().css("border","2px dotted orange");
    //elm.parents().css("border", "2px dotted orange");
    //elm.parents("div").css("border", "2px dotted orange");
    
//siblings


//$("li").eq(1).css("color","green")
//****************************************** first , last
//$("ul li").first().css("color","green")
//$("ul li").last().css("color","green")
//****************************************** is(selector)

//$("#example").children().last().is("div")
//$("li").first().is(":contains('the')")

//****************************************** filter
//$().filter(selector) work in the item itself not it's children
//$("li").filter(":even").css("background-color","yellow");
//$("#example").filter($("p")).hide(3000) won't work becase p is child
//$("#example").children().filter("p").hide(3000);

//$("div").filter("#example").css("border-color","yellow")

    $("#example").children().each(function (i, element) {
        console.log(element,i);
        if($(element).is("a")){
            $(this).css("color","red");
        }
        else {
            $(this).css("backgroundColor", "yellow");
        }
     });
});
$(function () {
    // $("li:first").css("backgroundColor","red");

    $("li").first().css("backgroundColor", "yellow");
    $("li").last().css({
        backgroundColor: "green"
    })
    // $("li").eq(2).css("backgroundColor","pink");
    // // $("img").next().css("backgroundColor","yellow")
    // $("img").nextAll().css("backgroundColor","red");
    // $("img").nextAll("form").css("backgroundColor","lightgreen");
    // $("img").prev().css("backgroundColor","orange");
    // $("img").prevAll().css("backgroundColor","cyan")
    // $("tr:first").parents("table")
    // $("#example").children(":not(a)")
    // $("#example").children().not("a")
    // $("#example").children().siblings()//html tree
    // $("#example").contents()==>nodetree
    // $("#example").children().filter("p").css("backgroundColor","red");
    // $("#example p").filter("p").css("backgroundColor","green");//not working
    $("tr td").each(function (i, elem) {
        if ($(this).is(":even"))
            $(this).css("backgroundColor", "red")
        else
            $(this).css("backgroundColor", "green")

    })


})//end of page loading

