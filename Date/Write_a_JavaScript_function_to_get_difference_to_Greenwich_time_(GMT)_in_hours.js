function diff_to_GMT(dt) {
    return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date();
console.log(diff_to_GMT(dt));

dt = new Date(1989, 10, 1);
console.log(diff_to_GMT(dt));  
