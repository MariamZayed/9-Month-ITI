$(function(){

////text,html,val
// console.log($("li").text());
console.log($("li:first").html());//baires Tags
console.log($("li").html());
$(":text").val();//all elements with value attribute
// $("select").val('2')
//Attributes
// console.log($("img").attr("src"));
$("img").attr("src","duck.gif");
// $("img").each(function(index,elem){
//     // $(this).attr("src","duck.gif");
//    console.log( $(this).is(":odd"));
   

// })
$("table tr td").each(function(i,e){
    if($(e).is(":even")){
        $(e).css({
            backgroundColor:'green',
            color:'yellow'
        })
    }
    else{
        $(e).css({
            backgroundColor:'red',
            color:'yellow'
        })
    }
    $(":checkbox").each(function(i,e){
        if($(e).is(":checked")){
            console.log($(e).val());
        }
    })
})
//events
//
$("li").click(function(){
    $(this).css({
        backgroundColor:'lightgreen',
        margin:'2px',
        opacity:'0.5'
    }).hide(1000).show(1000);
})
// $("li").hover(function(){
//     // $(this).toggleClass("active")
//     $(this).slideToggle(1000);
// });
//select last list item ===>append new parag
//blanck text
// $("li:last-child").append("HIIIIII");
//html text
// $("li:last-child").append("<h1 style='background-color:red;color:yellow'>HIIIIIIIIII</h1>");

//javascript element
let newP=document.createElement("p");
newP.innerText="Welcome as js element";
// newP.onclick=function(){
//     alert("HIIIIIIIIIIIIII p");
// }
$(newP).click(function(){
    alert("HIIIIIIIIIIII");
})
newP.style.backgroundColor="green";
newP.style.color="yellow";
$("li:last-child").append(newP);
//jQuery Selector


$("#appendRT").click(function(){
    //append as last direct child
    //get last list item
    let myListItem=$("li:last");
    //last child ===>example div(append)
    // $("#example").append(myListItem);//cut element with event
    // $("#example").append($(myListItem).clone(true));//copy element with event
    // $(myListItem).clone(true).appendTo($("#example"));//copy element with event

    // $("li:first").after("<h3>Welcome</h3>");
    // $("li:first").before("<h3>Welcome</h3>");
    $(myListItem).clone(true).insertBefore($("li:first"));


})
$("div").click(function(){
    let Copy=$(this).clone(true);
    $("body").append(Copy);
   $(this).off("click");
})

});//End Of Loading