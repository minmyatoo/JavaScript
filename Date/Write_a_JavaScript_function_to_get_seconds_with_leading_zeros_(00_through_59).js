function seconds_with_leading_zeros(dt) {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt)); 
