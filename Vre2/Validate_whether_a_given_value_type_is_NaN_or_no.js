function is_nan(val) {
    return val !== val;
}

console.log(is_nan(NaN));

console.log(is_nan('bar')); 
