// window.onclick = e => {
    // if(e.target.tagName==img){
        // e.target.style.width = "30%" ;
        // e.target.style.width = 30%;
        // console.log(e.target.tagName);  // to get the element tag name alone
    // }
// }
let image = document.getElementsByTagName("img");
image.onclick = function(e) {
    image.classList.toggle("imagestyle");
} 