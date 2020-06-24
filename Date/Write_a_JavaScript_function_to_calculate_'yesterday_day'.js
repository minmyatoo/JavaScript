var yesterday = function (date1) {
    var dt = new Date(date1);
    return new Date((dt.setDate(dt.getDate() - 1))).toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));  
