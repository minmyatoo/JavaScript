function max_date(all_dates) {
    var max_dt = all_dates[0],
        max_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function (dt, index) {
        if (new Date(dt) > max_dtObj) {
            max_dt = dt;
            max_dtObj = new Date(dt);
        }
    });
    return max_dt;
}

console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
