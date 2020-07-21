var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y),
};

function solveRect(l,b){
    console.log("\nSolving for rectangle with L: "+l+" & B: "+b);
    if(l<=0 || b<=0){
        console.log("L or B should be greater than zero");
    }
    else{
        console.log("Area of Reactangle is: "+ rect.area(l,b));
        console.log("Perimeter of Reactangle is: "+ rect.perimeter(l,b));
    }
}

solveRect(4,6);
solveRect(2,9);
solveRect(0,2);
solveRect(1.5,1.5);