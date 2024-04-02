// Day 31 Challenge: Start Coding!
// Question 97:
function currentDate() {
    var declered = new Date();
    var day = String(declered.getDate()).padStart(2, '0');
    var month = String(declered.getMonth()).padStart(2, '0');
    var year = declered.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(currentDate());
// Question 98:
function daysNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysNewYear() + " days until New Year.");
// Question 99:
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(8, 30);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
