function upper_am_pm(dt) {
    return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date();
console.log(upper_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(upper_am_pm(dt));  
