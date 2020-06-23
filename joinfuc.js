function changeArr(arr){
    //将多维数组转换为逗号分隔的字符串
    var newarr = arr.toString();
    //将字符串根据都好转为数组
    var finalarr = newarr.split(',')
    console.log(finalarr);
}

changeArr([1,2,3,[1,2,3,[1,2,3]]])