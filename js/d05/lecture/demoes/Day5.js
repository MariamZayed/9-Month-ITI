
/****************************
 * Event --> Action
 * Event --> Object -->EventHandler     onevent
 *                     onclick
 *                     onkeypress
 *                      onmouseout
 *                      onmouseover
 */
// console.log(this);//window
// function test()
// {
//     number=2; //this.number=2; window.number=2;
//     console.log(this);
// }


window.onload=function(){
    //1- as attribute onevent
    //2- as property from js object
    //find object
    let buttonObject=document.querySelector("button");
    let divObject=document.querySelector("#divBox");
    let nameTextBox=document.querySelector("input[name=nameTxtBox]");
    let ageTextBox=document.querySelector("input[name=ageTxtBox]");
    let spanNameError=document.querySelector("span");
    //do something --> arrch event 
    buttonObject.onclick=function(){
        document.body.style.backgroundColor="pink";
    };
    buttonObject.addEventListener("click", function(){
        console.log("Hiiiiiii");
    });//click 


    // buttonObject.onclick=null;

    //1- mosueover
    // divObject.onmouseover=function(){
    //         //this
    //         // console.log(this);
    //         this.classList.add("bPink");
        
        
    // }//over

    divObject.onmouseout=function(){
        //this
        // console.log(this);
        this.classList.remove("bPink");
    
    }//out

         
    divObject.onmousemove=function(event){
        //this;
      this.innerText=`${event.x} : ${event.y}`
    }//move

    //validation name
    nameTextBox.onblur=function()
    {
        if(this.value=="")
            spanNameError.style.visibility="visible";
        else
        spanNameError.style.visibility="hidden";

    }
    //validation on age
    // ageTextBox.onchange=functionName
    // ageTextBox.onkeypress=functionName;

    ageTextBox.onkeypress=function(event){
         if(isNaN(event.key))
         event.preventDefault();

    }
}






