class Bird{
    static #counter=1;
    static #Score=0;
    constructor(){
        this.position={};
        this.position.left=0;
        this.position.top=Math.floor(Math.random()*85);
        this.bird_obj = document.createElement("img")
        this.bird_obj.style.position="absolute";
        this.bird_obj.style.left = this.position.left+"%";
        this.bird_obj.style.top = this.position.top+"%";

        // this.bird_obj.addEventListener("click",()=>{this.hitBird()});
    }

    move(secs){
        setTimeout(()=>{this.id = setInterval(()=>{
            if((this.position.left+1)<(100-this.width))
                this.position.left+=1;
            else{
                this.position.left=0;
                this.position.top=Math.floor(Math.random()*85);
                this.bird_obj.style.left = this.position.left+"%";
                this.bird_obj.style.top = this.position.top+"%";
            }
            this.bird_obj.style.left=this.position.left+"%";

        },50)},secs);
    }

    hitBird(){
        this.position.left=0;
        this.position.top=Math.floor(Math.random()*85);
        this.bird_obj.style.left = this.position.left+"%";
        this.bird_obj.style.top = this.position.top+"%";
        counter_box.innerText = `${Bird.#counter++}`;
    }
}

class WhiteBird extends Bird{
    constructor(){
        super();
        this.width=15;
        this.height=15;
        this.bird_obj.src="images/white.gif"

        this.bird_obj.style.width = this.width+"%";
        this.bird_obj.style.height = this.height+"%";

        document.body.append(this.bird_obj);

        this.bird_obj.addEventListener("click",()=>{
            this.hitBird();
        });
    }

    

}

class Bomb{
    constructor(){
        this.position={};
        this.position.top = -15;
        this.position.left = Math.floor(Math.random()*85);
        this.bomb_obj = document.createElement("img")
        this.bomb_obj.style.position="absolute";
        this.bomb_obj.style.left = this.position.left+"%";
        this.bomb_obj.style.top = this.position.top+"%";

        this.width=15;
        this.height=15;
        this.bomb_obj.src="images/bomb.png"
        this.bomb_obj.style.width = this.width+"%";
        this.bomb_obj.style.height = this.height+"%";
        document.body.append(this.bomb_obj);

        this.bomb_obj.addEventListener("click",()=>{this.explode()});
    }

    move(){
        this.id = setInterval(()=>{
            if((this.position.top+1)<(100-this.height))
                this.position.top+=1;
            else{
                this.position.top = -15;
                this.position.left = Math.floor(Math.random()*85);
                this.bomb_obj.style.left = this.position.left+"%";
                this.bomb_obj.style.top = this.position.top+"%";
                clearInterval(this.id);
            }
            this.bomb_obj.style.top=this.position.top+"%";

        },20);

    }

    explode(){
        bomb_obj.bomb_obj.style.display="none";

        for (const key in birds_obj) {
            if(
                (birds_obj[key].position.left + birds_obj[key].width) > (bomb_obj.position.left - 15) && birds_obj[key].position.left < (bomb_obj.position.left + 30) 
            && (birds_obj[key].position.top + birds_obj[key].height) > (bomb_obj.position.top -15) && birds_obj[key].position.top < (bomb_obj.position.top + 30)
            ){
                birds_obj[key].hitBird();
            }
            }
        }
}

let timedBomb = function(){
    id = setInterval(function(){
        bomb_obj.bomb_obj.style.display="inline-block";
        bomb_obj.move();
    },10000);
}

let setGameTimer = function(){
    let time_txt = document.querySelector(".timer");
    document.body.append(time_txt);

    time_txt.innerText = "60";
    let i =59;
    let id = setInterval(function(){
        if(i!=-1){
            time_txt.innerText = `${i}`;
            i--;
        }
        else{
            clearInterval(id);
        }
    },1000)
}