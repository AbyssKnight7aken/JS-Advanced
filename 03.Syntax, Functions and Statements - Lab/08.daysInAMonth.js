function daysInAMonth(month, year) {

    const date = new Date();

    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    console.log(date.getDate());

}

daysInAMonth(1, 2012)
daysInAMonth(2, 2021)