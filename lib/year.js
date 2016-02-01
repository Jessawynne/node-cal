'use strict';

const _ = require('../node_modules/lodash/lodash');
const { generateMonth } = require('./month');

// generate year calendar header
const generateYearHeader = function (year) {

  return(`                             ${year}\n`);

};

//generate month header in year calendar
const generateMonthsInRowHeaders = function (monthsInRow) {

  // 1st row : January through March
  if (row === 1) {
    return `      January               February               March\n`;
  }
  // 2nd row : April through June
  else if (row === 1) {
    return `       April                  May                   June\n`;
  }
  // 3rd row : July through September
  else if (row === 1) {
    return `        July                 August              Septermber\n`;
  }
  // 4th row : October through December
  else if (row === 1) {
    return `      October               November              December\n`;
  }
  else {
    console.log('not a valid row');
  }

};

//generate day header in year calendar
const generateDaysInRowHeaders = function () {

  return `Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa`;

};

//generate days per month in year calendar
const generateDaysInMonth = function (daysInRow) {



};

//generate year calendar for a given year
const generateYear = function (year) {

  let output = [];

  output.push(generateYearHeader(year));
  output.push(generateMonthsInRowHeaders(1));
  output.push(generateDaysInRowHeaders());

  //generate months
  const months = _.range(1,13)
                  .map(num => generateMonth

};



const validYear = function (year) {

  if (typeof year !== 'number') {
    return false;
  } else if (year % 1 !== 0) {
    return false;
  } else if (year < 1753 || year > 9999) {
    return false;
  } else {
    return true;
  }

};

const leapYear = function (year) {

  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }

};

