'use strict';

const modifiedMonth = function (month) {
  if (month < 3) {
    month += 12;
  }
  return month;
};

const modifiedYear = function (year, month) {
  if (month < 3) {
    year = year - 1;
  }
  return year;
};

const getDay = function (year, month, day) {
  modifiedMonth(month);
  modifiedYear(year, month);

  const h = (day + parseInt(((month + 1) * 26) / 10) 
             + year 
             + parseInt(year / 4) 
             + 6 * parseInt(year / 100) 
             + parseInt(year / 400)) % 7;

    return ((h + 6) % 7);
};

module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay: getDay
};


