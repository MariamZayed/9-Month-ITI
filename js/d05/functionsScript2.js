let div1_element = document.querySelector(".div1");
let div2_element = document.querySelector(".div2");
let div3_element = document.querySelector(".div3");
let body_element = document.querySelector("body");

div1_element.onclick= function(){
    let div_copy = document.createElement("div");
    div_copy.style.cssText = "display:inline-block; background-color: green;";
    body_element.append(div1_element);
    div1_element.style.pointerEvents = "none";
};
