$(function(){
    $("#Add").click (function (){
        let name=$("#txtName").val()
        let grade=$("#txtAge").val()
        let department=$("#_slt").val()
        let newTr=document.createElement("tr")
        let newTd=document.createElement("td")
        let newTdSec=document.createElement("td")
        let newTdThird=document.createElement("td")
        let table = document.getElementById("_tbl")
        $(newTd).text(name);
        $(newTdSec).text(grade);
        $(newTdThird).text(department);
        $(newTr).append(newTd);
        $(newTr).append(newTdSec);
        $(newTr).append(newTdThird);
        $(table).append(newTr)
        console.log(table);
        $(table).css({border:'3px solid black',backgroundColor:'pink',margin:'3px',width:'200px'})

    })
})