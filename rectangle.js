module.exports = (x,y,callback) => {
    if(x<=0 || y<0){
        setTimeout(()=> callback(new Error("L or B should be greater than zero"),null)
            , 0);
    }
    else{
        setTimeout(()=> 
            callback(null,
                {
                    perimeter :() => (2*(x+y)),
                    area :() => (2*(x+y))
                }
            )
            , 2000
        );
    }
}





