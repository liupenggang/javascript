
var sum = function () {
    var argu =0;
    for(var i=0;i<arguments.length;i++){
        argu+=arguments[i];
    }
    return argu;
};

console.log(sum(12,13,14,15));