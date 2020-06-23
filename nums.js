
function maxCount(arr) {
    var newarr = {};
    console.log(newarr);
    for (let i = 0; i < arr.length; i++) {
        var valkey = arr[i];
        if (newarr[valkey]) {
            newarr[valkey]++;
        } else {
            newarr[valkey] = 1;
        }
    }
    console.log(newarr);

    var maxNum = 0;
    var maxkey = newarr[0];
    for (var newarrkey in newarr) {

        if (newarr[newarrkey] > maxNum) {
            maxNum = newarr[newarrkey];
            maxkey = newarrkey;
        } else {
            maxNum = maxNum;
            maxkey = maxkey;
        }
    }
    console.log("出现最多的数是："+ maxkey);
    console.log("出现了："+ maxNum + "次");
    
}

var arr = [1, 1, 2, 2, 2, 3]
maxCount(arr);