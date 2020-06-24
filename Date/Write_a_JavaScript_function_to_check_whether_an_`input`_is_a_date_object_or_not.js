var is_date = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
        return true;
    return false;
};

console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(is_date([1, 2, 4, 0]));  
