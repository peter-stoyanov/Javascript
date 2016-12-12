function calcNextDay([year, month, day]) {

    //Write a JS function that calculates the date of the next day by given year, month and day


    let date = new Date(year, month - 1, day,7,0,0,0);
    console.log(date);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(nextDate);
    return `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`;
}

calcNextDay(['2016', '9', '30']); // 2016-10-1