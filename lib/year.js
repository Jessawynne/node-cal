'use strict';

const generateYear = function (year) {

  console.log('year calendar');

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

