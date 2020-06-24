function day_of_the_month(d) {
    return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

d = new Date();
console.log(day_of_the_month(d));

d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); 
