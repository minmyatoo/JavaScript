Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function short_months(dt) {
    return Date.shortMonths[dt.getMonth()];
}

dt = new Date();
console.log(short_months(dt));

dt = new Date(2015, 10, 1);
console.log(short_months(dt));  
