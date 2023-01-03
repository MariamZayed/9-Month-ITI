let egg_element = document.querySelector("#egg");
let basket_element = document.querySelector("#basket");
let random_location = 0;

let randomEggLocation = function(){
    random_location = parseInt(Math.random()*1000);
}

let droppingEgg = function(){
    let counter=0;
    let id = setInterval(function(){
        if(counter<(window.innerWidth-500-egg_element.width)){
            counter=counter+50;
            egg_element.style.cssText = `margin-top:${counter}px; left: ${random_location}px;`;

            let x_egg = window.scrollX + egg_element.getBoundingClientRect().left; 
            let x_basket = window.scrollX + basket_element.getBoundingClientRect().left; 
            let y_egg = window.scrollY + egg_element.getBoundingClientRect().top;
            let y_basket = window.scrollY + basket_element.getBoundingClientRect().top;
            console.log(x_egg,x_basket);
            if(y_egg != y_basket && (x_egg < x_basket || x_egg > x_basket+basket_element.width-20)  && y_egg == window.innerHeight-164){
                egg_element.src="lecture/demoes/images/a broken.png";
                egg_element.id="broken";
            }
        }
        else{
            clearInterval(id);
        }
    },500)
}
