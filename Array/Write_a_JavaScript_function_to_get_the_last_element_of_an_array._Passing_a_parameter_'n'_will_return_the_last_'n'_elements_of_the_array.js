last = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
