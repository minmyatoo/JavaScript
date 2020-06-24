Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function short_Days(dt) {
    return Date.shortDays[dt.getDay()];
}

dt = new Date();
console.log(short_Days(dt));

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));
