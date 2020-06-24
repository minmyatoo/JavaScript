function full_year(dt) {
    return dt.getFullYear();
}

dt = new Date();
console.log(full_year(dt));

dt = new Date(2015, 10, 1);
console.log(full_year(dt)); 
