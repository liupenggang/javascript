var arry = [1,2,3,4,5,6]
//1 最耗性能的写法
for(var i=0;i<arry.length;i++){
    var cur = arry[i];
    console.log(cur);
}

//2 提高效率，浪费内存的写法（目前流行）
var len =arry.length;
for(var i=0;i<len;i++){
    var cur = arry[i];
    console.log(cur);
}

//3 效率最高的写法   （js种进行对比的话数字对比最快）
for(var i=arry.length-1;i>=0;i--){
    var cur = arry[i];
    console.log(cur);
}