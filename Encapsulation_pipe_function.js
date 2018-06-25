function __pipe__(...fnList){
    return function(...args){
        var fn = fnList.reduceRight((a,b)=>(...args) => b.apply(this, [...args, a]));
        return fn.apply(this, args);
    }
}

//test

function task1(x, next){
    console.log(`task1:${x}`);
    setTimeout(next, 2000);
}
function task2(next){
    console.log('task2');
    setTimeout(next,1000    )
}
function task3(){
    console.log('task3');
}
var foo = __pipe__(task1, task2, task3);
foo(5);