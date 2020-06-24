function timezone_offset_in_seconds(dt) {
    return -dt.getTimezoneOffset() * 60;
}

dt = new Date();
console.log(timezone_offset_in_seconds(dt));

dt = new Date(1989, 10, 1);
console.log(timezone_offset_in_seconds(dt)); 
