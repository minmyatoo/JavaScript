function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while (len--) {
        var item = arr[len];

        if (!assoc[item]) {
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));  
