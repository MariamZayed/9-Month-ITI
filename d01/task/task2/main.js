document.querySelector("button#start").addEventListener("click",function(){
    document.querySelector("section").classList.add("moving");
});
document.querySelector("button#stop").addEventListener("click",function(){
    document.querySelector("section").classList.remove("moving");
});