
export class Raster{

    constructor(context){
        this.ctx = context;
        this.width = 800;
        this.height = 400;
    }





    draw(){
        // Total Params
        const ct = this.ctx;
        const w = this.width;
        const h = this.height;

        // Drawing Backgrounds
        ct.fillStyle = '#005ABC';
        ct.fillRect(0, 0, (w * 0.68), h);

        ct.fillStyle = '#B7F9AA';
        ct.fillRect((w * 0.68), 0,(w * 0.32), h);
        
       /*
        ct.fillStyle = '#005ABC';
        ct.fillRect(0, 0,w , h);
        */


        // Block Params
        const startDraw = w*0.45;
        const endDraw = w*0.68;
        const blockNr = 16;
        const blockSize = 12;
        const startSize = 4;


        const setting1 = {
            grow:true,
            ct: ct,
            h: h,
            w: w,
            fcolor:'#B7F9AA',
            bcolor:'#005ABC',
            startPaint: startDraw,
            endPaint: endDraw,
            blockNr: blockNr,
            blockSize: blockSize,
            startSize: startSize
        }
        let endPoint = this.drawBlock(setting1);
        const setting2 = {
            grow:false,
            ct: ct,
            h: h,
            w: w,
            fcolor:'#005ABC',
            bcolor:'#B7F9AA',
            startPaint: endPoint,
            endPaint: w,
            blockNr: 19,
            blockSize: blockSize,
            startSize: blockSize
        }
        this.drawBlock(setting2);
        ct.fillStyle = '#B7F9AA';
        ct.fillRect((w * 0.95), 0,(w * 0.32), h);

        // Calculating 
        /*
        const sizeInc = (blockSize-startSize)/blockNr;
        console.log(`Total Width :  ${w}, Total height: ${h} \n 
                     Start Draw : ${startDraw}, End Draw : ${endDraw}\n
                     Block Nr: ${blockNr}, Block Width : ${blockSize}\n
                     Size Increase : ${sizeInc}`);


        
        let sx = startDraw;
        let sy = 0;
        let ss = startSize;
        let atTop = true;
        let doPaint = true;

        while(sx<= endDraw){
            let doPaint = true;
            console.log("X : " + sx);
            console.log("............................................");
            while(sy<=h){
                if (doPaint){
                    this.drawSquare('#B7F9AA','#00375b',(sx-(ss/2)), (sy-(ss/2)) , ss , ss);        
                    console.log("Painting Qube Size : " + ss );
                }else{
                    console.log(" --- > Size : " + ss );
                }
                
                sy += blockSize;
                doPaint = !doPaint;
            }
            ss += sizeInc;
            sx += blockSize;
            atTop = !atTop;
            sy = atTop?0:(blockSize);
        }
        */
        
        /*
        this.drawSquare('#B7F9AA','#00375b',st, h/3, 5, 5)
        this.drawSquare('#B7F9AA','#00375b',st, h/1.2, 5, 5)
        */



        /*
        var grd = ct.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        // Fill with gradient
        ct.fillStyle = grd;
        ct.fillRect(10, 10, 150, 80);
        */
        
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

    drawBlock(set){
        // Calculating 
        const sizeInc = set.grow?(set.blockSize-set.startSize)/set.blockNr:
            set.startSize/set.blockNr;
        /*
        console.log(`Total Width :  ${w}, Total height: ${h} \n 
                        Start Draw : ${startDraw}, End Draw : ${endDraw}\n
                        Block Nr: ${blockNr}, Block Width : ${blockSize}\n
                        Size Increase : ${sizeInc}`);
        */

        
        let sx = set.startPaint;
        let sy = 0;
        let ss = set.startSize;
        let atTop = true;
        let doPaint = true;

        while(sx<= set.endPaint){
            let doPaint = true;
            console.log("X : " + sx);
            console.log("............................................");
            set.ct.fillStyle = set.bcolor;
            set.ct.fillRect(sx, 0, ss, set.h);

            while(sy<=set.h){
        
                if (doPaint){
                    this.drawSquare(set.fcolor,set.bcolor,sx, (sy-(ss/2)) , ss , ss);        
                    console.log("Painting Qube Size : " + ss );
                }else{
                    console.log(" --- > Size : " + ss );
                }
                
                sy += set.blockSize;
                doPaint = !doPaint;
            }
            if (set.grow){
                ss += sizeInc;
            }else{
                ss -= sizeInc;
            }
            
            sx += set.blockSize;
            atTop = !atTop;
            sy = atTop?0:(set.blockSize);
        }
        return sx - ss;


    }
}