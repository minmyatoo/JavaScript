var is_weekend = function (date1) {
    var dt = new Date(date1);

    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return "weekend";
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));  
