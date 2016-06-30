let specialDates = [];
let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function goToDate(day, month, year) {
    let date = new Date(year, month, day);

    return date;
}

function saveDate(holiday, date) {
    let specialDate = {
        name: holiday.name,
        date: date
    };

    specialDates.push(specialDate);
}

function getDateString(date) {
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`; 
}

function nextSpecialDate() {
    let now = new Date();
    let next;
    specialDates.forEach(date => {
        if(next === undefined) {
            next = date;
        } else {
            let nextDifference = next.date.getTime() - now.getTime();
            let dateDifference = date.date.getTime - now.getTime();

            if(dateDifference > 0 && dateDifference < nextDifference) {
                next = date;
            }
        }
    });

    return next;
}

export { goToDate, saveDate, getDateString, nextSpecialDate }