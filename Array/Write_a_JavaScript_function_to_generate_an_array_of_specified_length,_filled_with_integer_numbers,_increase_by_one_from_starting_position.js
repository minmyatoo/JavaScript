function array_range(start, len) {
    var arr = new Array(len);
    for (var i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));  
