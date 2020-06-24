function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
}

console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));  
