function hours_with_zeroes(dt) {
    return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

dt = new Date();
console.log(hours_with_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));  
