// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

// Solution
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}
alert(getSecondsToTomorrow());