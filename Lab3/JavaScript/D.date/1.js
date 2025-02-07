// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

//Solution
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// #68C 2
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:

let dates = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(dates) );        // should output "TU"

//Solution
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }