function __delay__(time, fn){
    return function(){
        var self = this,
            args = [].slice.call(arguments),
            callback;
        if(fn.length < args.length){
            callback = args[args.length - 1];
            args.length--;
        }
        setTimeout(function(){
            var ret  = fn.apply(this, args);
            callback && callback(ret);

        },time);
    }
}
function output(msg){
    console.log(msg);
}
output = __delay__(1500, output);

function __pipe__(){
    var fnList = [].slice.call(arguments);
    return fnList.reduceRight((a,b) => () => b(a));
}
function outputOneByOne = __pipe__(output.bind(null, 'step1'),
                                   output.bind(null, 'step2'),
                                   output.bind(null, 'step3'))
outputOneByOne();