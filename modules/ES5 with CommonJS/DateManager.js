"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var specialDates = [];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function goToDate(day, month, year) {
    var date = new Date(year, month, day);

    return date;
}

function saveDate(holiday, date) {
    var specialDate = {
        name: holiday.name,
        date: date
    };

    specialDates.push(specialDate);
}

function getDateString(date) {
    return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
}

function nextSpecialDate() {
    var now = new Date();
    var next = void 0;
    specialDates.forEach(function (date) {
        if (next === undefined) {
            next = date;
        } else {
            var nextDifference = next.date.getTime() - now.getTime();
            var dateDifference = date.date.getTime - now.getTime();

            if (dateDifference > 0 && dateDifference < nextDifference) {
                next = date;
            }
        }
    });

    return next;
}

exports.goToDate = goToDate;
exports.saveDate = saveDate;
exports.getDateString = getDateString;
exports.nextSpecialDate = nextSpecialDate;