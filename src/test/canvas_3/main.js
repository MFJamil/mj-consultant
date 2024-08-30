import {Player} from './player.js'
import { InputHandler } from './input.js';
import {Raster} from './Raster.js'

const config = {        };
const raster = new Raster();



window.addEventListener('load',()=>{
    const cont = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    config.ct = ctx;
    config.color1 = '#005ABC';
    config.color2 = '#B7F9AA';
    config.blockSize = 16;
    config.policy = "fixed";
    config.drawRight = true;
    console.log("cont.clientWidth : " + cont.clientWidth);
    console.log("cont.clientHeight : " + cont.clientHeight);
    canvas.setAttribute('width', cont.clientWidth + "px");
    canvas.setAttribute('height', cont.clientHeight + "px");
    document.getElementById('height').value = cont.clientHeight;
    document.getElementById('width').value = cont.clientWidth;
    config.width = cont.clientWidth;
    config.height = cont.clientHeight;
    raster.draw(config);



    /*
    
    class Game {
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(){
            this.player.update(this.input.keys);
        }
        draw(context){
            this.player.draw(context);
        }
    }
    const game = new Game(canvas.width,canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
    */
})

export function removeRight(removeFlag){
    console.log("REMOVE RIGHT : " + removeFlag.checked);
    config.drawRight = removeFlag.checked;
    raster.draw(config);

    
}
export function dataChange(data){
    const cont = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,config.width,config.height);

    console.log("Got Data Change : " + data.value + " , holding type : " + typeof data.value);
    console.dir(data);
    config[data.name] = data.type==='number'?data.valueAsNumber:data.value;
    
    if ((data.name==='width')||(data.name==='height')){
        canvas.style[data.name] = data.value;
        canvas.setAttribute('width', config.width + "px");
        canvas.setAttribute('height', config.height + "px");
        
        cont.style.width = config.width + "px";
        cont.style.height = config.height + "px";
    
    }
    raster.draw(config);
}


