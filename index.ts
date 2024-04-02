// Day 31 Challenge: Start Coding!

// Question 97:

function currentDate(): string {
    const declered = new Date();
    const day = String(declered.getDate()).padStart(2, '0')
    const month = String(declered.getMonth()).padStart(2, '0')
    const year = declered.getFullYear()
    return `${day}-${month}-${year}`;
}
console.log(currentDate());


// Question 98:

function daysNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); 
    const diff = newYear.getTime() - today.getTime(); 
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
    return days;
}

console.log(daysNewYear() + " days until New Year.");

// Question 99:
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); 
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}


const nextBirthday = getNextBirthday(8, 30); 
console.log("Next birthday on:", nextBirthday.toLocaleDateString());