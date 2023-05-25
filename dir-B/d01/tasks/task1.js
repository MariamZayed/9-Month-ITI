$(function(){
    
    


    $("p,a").css({
        backgroundColor:"pink"
    });
    $(".a").css({
        border:"3px solid green"
    });
    $("img").css({
        border:"3px solid green",
        width:"100px",
        height:"100px"
    });
    $("div > p").css({
        color:"green",
        backgroundColor:"lightpink"
    });
    $("p:first + p").css({
        color:"yellow",
        backgroundColor:"pink"
    });
    $("div p:gt(0)").css({
        color:"green",
        backgroundColor:"lightpink"
    }); 
    $("a[href ^='http']").css({
        color:"lightgreen"
    });
    $("input[value *='to']").css({
        color:"lightgreen"
    });
    $('table tr:first-child').css({
        backgroundColor:"lightgreen"
    });
    $('tr:first').css({
        backgroundColor:"green"
    });
    $('table:eq(1) tr:last td:last-child').css({
        backgroundColor:"red"
    });
    $('td:odd').css({
        backgroundColor:"cyan"
    });
    $('td:nth-child(odd)').css({
        backgroundColor:"lightcyan"
    });
    $('input').css({
        backgroundColor:"blue"
    });
});