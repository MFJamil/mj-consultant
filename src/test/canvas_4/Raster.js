
export class Raster{

    constructor(){
    }







    draw(config){
        console.log("Config: " + JSON.stringify(config,null,2))
        // Total Params
        this.ctx = config.ct;
        const ct = config.ct;
        
        const w = config.width;
        const h = config.height;
        ct.clearRect(0,0,w,h);

        let startDraw = w*0.45;
        let endDraw = w*0.68;
        
        // Block Params
        if (config.startDraw){
            startDraw = config.startDraw;
            endDraw = config.startDraw  +  (w * 0.5);
        }

        console.log(`Start draw : ${startDraw} , End Draw : ${endDraw}`);
        // Drawing Backgrounds
        //ct.fillStyle = config.color1;
        //ct.fillRect(0, 0, startDraw + (w * 0.225), h);

        ct.fillStyle = config.color2;
        ct.fillRect(0, 0,w, h);
        

        const blockNr = 16;
        const blockSize = config.blockSize;
        const startSize = 2*blockSize;


        const setting1 = {
            grow:false,
            onTop:true,
            ct: ct,
            h: h,
            w: w,
            fcolor:config.color1,
            bcolor:config.color2,
            startPaint: startDraw,
            endPaint: endDraw,
            blockNr: blockNr,
            blockSize: blockSize,
            startSize: startSize,
            policy: config.policy
        }
        let result = this.drawBlock(setting1);
        /*
        const setting2 = {
            grow:false,
            onTop: result.onTop,
            ct: ct,
            h: h,
            w: w,
            fcolor:config.color1,
            bcolor:config.color2,
            startPaint: result.endPoint,
            endPaint: result.endPoint + (w * 0.225),
            blockNr: 19,
            blockSize: blockSize,
            startSize: result.lastSize,
            policy: config.policy
        }
        if (config.drawRight)
             result = this.drawBlock(setting2);
        ct.fillStyle = config.color2;
        */
        //ct.fillRect(config.startDraw  +  (w * 0.5), 0,w, h);
    }

    drawBorder(color,xPos, yPos, width, height, thickness = 1)
    {
        this.ctx.fillStyle=color;
        this.ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
    }

    drawSquare(fcolor,bcolor,xPos, yPos, width, height, thickness = 1)
    {
        this.ctx.fillStyle=bcolor;
        this.ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
        
        this.ctx.fillStyle=fcolor;
        this.ctx.fillRect(xPos, yPos, width , height );
    }

    calculateSize(set){
        let sizeInc = 0;
        if (set.grow){
            if(set.policy==='fixed'){
                sizeInc = (set.blockSize-set.startSize)/((set.endPaint-set.startPaint)/set.blockSize);
            }else{
                sizeInc = (set.blockSize-set.startSize)/set.blockNr;
            }
        }else{
            if (set.policy==='fixed'){
                sizeInc = set.startSize/((set.endPaint-set.startPaint)/set.blockSize);
            }else{
                sizeInc =  set.startSize/set.blockNr;
            }
        }
        //console.log("Calculating with config : " + JSON.stringify(set,null,2) + " , result is : " + sizeInc + ", side: " + (set.grow?'left':'right'));
        return sizeInc;
    }


    drawBlock(set){
        console.log((set.grow?"Left":"Right") + " :: " + JSON.stringify(set,null,2));
        const sizeInc = this.calculateSize(set);
        console.log("Size Increment : " + sizeInc);


        /*
        console.log(`Total Width :  ${w}, Total height: ${h} \n 
                        Start Draw : ${startDraw}, End Draw : ${endDraw}\n
                        Block Nr: ${blockNr}, Block Width : ${blockSize}\n
                        Size Increase : ${sizeInc}`);
        */

        let blkSize = set.blockSize;
        let sx = set.startPaint;
        
        let ss = set.startSize;
        let atTop = set.onTop;
        let sy = atTop?(-(blkSize/2)):(blkSize/2);
        
        while(sx<= set.endPaint){
            let doPaint = true;
            //console.log("X : " + sx);
            //console.log("............................................");
            //set.ct.fillStyle = set.bcolor;
            
            //set.ct.fillRect(sx, 0, ss, set.h);
            //if () console.log("I AM ON THE ENDDDDDD")
            let lastLine = ss>=16;
            while(sy<=set.h){
        
                if (doPaint){
                    this.drawSquare(set.fcolor,set.fcolor, sx + ((blkSize - ss)/2) , sy + ((blkSize- ss)/2) , ss , ss);        
                    //console.log(`\tsx:${sx} blockSize:${blkSize} ss: ${ss} this.drawSquare(set.fcolor,set.bcolor, ${sx + ((blkSize - ss)/2)}  ,${sy + ((blkSize- ss)/2)}  , ${ss} ,  ${ss}`);        
                    //console.log("Painting Qube Size : " + ss );
                }else{
                    //console.log(" --- > Size : " + ss );
                    //this.drawSquare('#ff0000',set.bcolor, sx , sy , ss , ss);        
                    //this.drawSquare(set.bcolor,set.bcolor, sx , sy , ss , ss);        
                         

                }
                
                sy += blkSize;
                doPaint = !doPaint;
            }
            if (set.grow){
                ss += sizeInc;
            }else{
                ss -= sizeInc;
            }
            
            sx += blkSize;
            atTop = !atTop;
            sy = atTop?(-(blkSize/2)):(blkSize/2);
            
        }
        return {endPoint: sx, lastSize: ss-sizeInc,onTop: !atTop} ;
    }
}