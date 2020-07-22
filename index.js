var rect = require('./rectangle');
const rectangle = require('./rectangle');

function solveRect(l,b){
    console.log("\nSolving for rectangle with L: "+l+" & B: "+b);
    
    rect(l,b,(err, angle)=>{
        if (err){
            console.log("ERROR:",err.message);
        }
        else{
            console.log("Area of Rectangle for L:"+l+"B:"+b+angle.area()+" & Perimeter is: "+angle.perimeter());
        }
    });
    console.log("\nEnd of Program");
}

solveRect(4,6);
solveRect(2,9);
solveRect(0,2);
solveRect(1.5,1.5);
solveRect(0,9);