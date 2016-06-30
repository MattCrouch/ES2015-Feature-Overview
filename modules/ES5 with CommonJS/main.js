'use strict';

var _DateManager = require('DateManager.js');

var dateManager = _interopRequireWildcard(_DateManager);

var _ImportantDates = require('ImportantDates.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

_ImportantDates.importantDates.forEach(function (holiday) {
    var date = dateManager.goToDate(holiday.day, holiday.month - 1, holiday.year);
    dateManager.saveDate(holiday, date);
    console.log(holiday.name + ' is on ' + dateManager.getDateString(date));
});

var nextDate = dateManager.nextSpecialDate();

if (nextDate !== undefined) {
    console.log('The next date is ' + nextDate.name + ' on ' + dateManager.getDateString(nextDate.date));
}

/*
New Year's Day is on 1 January 2017
Good Friday is on 14 April 2017
Easter Monday is on 17 April 2017
Early May Bank Holiday is on 1 May 2017
Spring Bank Holiday is on 29 May 2017
Summer Bank Holiday is on 28 August 2017
Christmas Day is on 25 December 2017
Boxing Day is on 26 December 2017
The next date is New Year's Day on 1 January 2017
*/