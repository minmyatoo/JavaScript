function min(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.min.apply(null, input);
}

console.log(min([12, 34, 56, 1]));
console.log(min([-12, -34, 0, -56, -1]));
