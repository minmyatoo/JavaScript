function numeric_month(dt) {
    return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1);
}

dt = new Date();
console.log(numeric_month(dt));

dt = new Date(2015, 10, 1);
console.log(numeric_month(dt)); 
