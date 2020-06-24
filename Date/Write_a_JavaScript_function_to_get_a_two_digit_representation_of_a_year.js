function sort_year(dt) {
    return ('' + dt.getFullYear()).substr(2);
}

dt = new Date();
console.log(sort_year(dt));

dt = new Date(1989, 10, 1);
console.log(sort_year(dt));  
