Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function long_Days(dt) {
    return Date.longDays[dt.getDay()];
}

dt = new Date();
console.log(long_Days(dt));

dt = new Date(2015, 10, 1);
console.log(long_Days(dt));  
