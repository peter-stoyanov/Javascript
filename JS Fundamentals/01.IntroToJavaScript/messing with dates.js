var d = new Date;
var d2 = new Date("January 13, 1980 11:20:00");
var d3 = new Date(1980,0,13,11,20,0,0);
var shortdate = new Date(1980,0,13);

var monthNumber = d2.getMonth(); //0
var monthname = getMonthNameFromNumber(d2.getMonth());

function getMonthNameFromNumber(monthNum){
    var monthnames = ['January','February','March','April','May','June','July','August',
        'September','October','November','December'];
    return monthnames[monthNum];
}

function formatDate (date){
    //let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    month = month +1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getDate();
    if (day < 10){
        day = '0' + day;
    }
    return day + '/' + month + '/' + year;
}

console.log(d);
console.log(d2);
console.log(monthNumber);
console.log(monthname);
console.log(formatDate(d2));
console.log(shortdate);