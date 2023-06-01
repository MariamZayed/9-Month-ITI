const moveRight=function(imageObject,left)
{
   
      let id=setInterval(function(){
        left+=20
        if(left<(window.innerWidth-imageObject.width))
        imageObject.style.left=left+"px"
        else
        {
            clearInterval(id);
            imageObject.classList.add("flip");
            moveLeft(imageObject,left);
        }
      },100);


}

const moveLeft=function(imageObject,left)
{
   
      let id=setInterval(function(){
        left-=20
        if(left>=0)
        imageObject.style.left=left+"px"
        else
        {
            clearInterval(id);
           imageObject.classList.remove("flip");
           moveRight(imageObject,left);
        }
      },100);


}



