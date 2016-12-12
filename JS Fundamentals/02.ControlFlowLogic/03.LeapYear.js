function isLeapYear([year]) {

    //Write a JS function to check whether a year is leap. Leap years are either
    // divisible by 4 but not by 100 or are divisible by 400.

    year = Number(year);
    let yearType = year % 4 == 0 && year % 100 != 0 || year % 400 == 0; //return boolean
    //console.log(yearType);
    return yearType ? 'yes' : 'no';
}

console.log(isLeapYear([1999])); // no
console.log(isLeapYear([2000])); // yes
console.log(isLeapYear([1900])); // no