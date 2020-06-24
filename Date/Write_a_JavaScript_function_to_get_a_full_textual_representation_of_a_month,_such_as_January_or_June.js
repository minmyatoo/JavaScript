Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function full_month(dt) {
    return Date.longMonths[dt.getMonth()];
}

dt = new Date();
console.log(full_month(dt));

dt = new Date(2015, 10, 1);
console.log(full_month(dt));  
