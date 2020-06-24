function endOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth() + 1, 0);

}

dt = new Date();

console.log(endOfMonth(dt).toString());  
