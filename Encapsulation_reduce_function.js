function __reduce__(...fnList){
    return function(...args){
        if(args.length <= 0) return;
        fnList[0] = fnList[0].apply(this, args);
        return fnList.reduce((a,b) => b.call(this, a));
    }
}

//test
function add(x,y){
    return x+y;
}
function double (num){
    return num*2;
}
var fn = __reduce__(add, double, double,double);
fn(2,3)
