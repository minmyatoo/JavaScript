function endOfWeek(date) {

    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));

}

dt = new Date();

console.log(endOfWeek(dt).toString());  
