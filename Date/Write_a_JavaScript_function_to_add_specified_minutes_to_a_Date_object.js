var add_minutes = function (dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
}
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
