'use strict';

const { expect } = require('chai');
//const cp = require('child_process');
const { execSync } = require('child_process'); //since we are not using anything else from child_process

describe('cal', () => {

  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  });
  // tests designed for zellers.js module
  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zellers.js');

    describe('.modifiedMonth', () => {

      it('is a function of zellers', () => {
        expect(zellers.modifiedMonth).to.be.a('function');
      });
      // 1 === 13
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      // 2 === 14
      it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
      // 3 === 3
      it('return 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });

    });

    describe('.modifiedYear', () => {

      it('is a function of zellers', () => {
        expect(zellers.modifiedYear).to.be.a('function');
      });
      //2015, 1 === 2014
      it('returns 2014 for January 2015', () => {
       expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      //2016, 2 ==== 2015
      it('returns 2015 for February 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
      //2017, 3 === 2017
      it('returns 2017 for March 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });

    });

    describe('.getDay', () => {

      it ('is a function of zellers', () => {
        expect(zellers.getDay).to.be.a('function');
      });
      //2016, 3, 1 === 2
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      //2000, 3, 1 === 3
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
      //2100, 3, 1 === 1
      it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });
      //2200, 3, 2 === 0
      it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
      //2300, 3, 1 === 4
      it('returns 4 (Thursday) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });

    });

  });
  // tests designed for center.js module
  describe('Calendar heading', () => {
    const center = require('../lib/center');

    it('is a function of center.js', () => {
      epxect(center.generateCalHeader).to.be.a('function');
    });

    it('should handle January', () => {
      expect(center.generateCalHeader('January 2016')).to.equal('....January 2016');
    });

     it('should handle February', () => {
      expect(center.generateCalHeader('February 2016')).to.equal('...February 2016');
    });

  });
  //tests designed for month.js module
  describe('Month specifics', () => {
    const month = require('../lib/month.js');

    describe('generateMonth', () => {

      it('is a function of month.js', () => {
        expect(month.generateYear).to.be.a('function');
      });

    });

    describe('validMonth', () => {

      it('is a function of month.js', () => {
        expect(month.validMonth).to.be.a('funciton');
      });

      it('returns false if month < 1 || month > 12', () => {
        expect(month.validMonth(0)).to.be.false;
        expect(month.validMonth(13)).to.be.false;
       });

      it('returns false if month is not a number', () => {
        expect(month.validMonth('d')).to.be.false;
      });

      it('returns false if month is no an integer', () => {
        expect(month.validMonth(11.13)).to.be.false;
      });

      it('returns true if month is an integer && 0 < month < 13', () => {
        expect(month.validMonth(1)).to.be.true;
        expect(month.validMonth(12)).to.be.true;
      });

    });

  });

  //tests designed for year.js module
  describe('Year specifics', () => {
    const year = require('../lib/year.js');

    describe('generateYear', () => {

      it('is a function of year.js', () => {
        expect(year.generateYear).to.be.a('function');
      });

    });

    describe('validYear', () => {

      it('is a function of year.js', () => {
        expect(year.validYear).to.be.a('function');
      });

      it('returns false if year < 1753', () => {
        expect(year.validYear(1752)).to.be.false;
      });

      it('returns false if year > 9999', () => {
        expect(year.validYear(10000)).to.be.false;
      });

      it('returns false if year is not a number', () => {
        expect(year.validYear('a')).to.be.false;
      });

      it('returns false if year is not an integer', () => {
        expect(year.validYear(1.321)).to.be.false;
      });

      it('returns true if year is > 1752', () => {
        expect(year.validYear(1753)).to.be.true;
      });

      it('returns true if year is < 10000', () => {
        expect(year.validYear(9999)).to.be.true;
      });

    });

    describe('leapYear', () => {

      it('is a function of year.js', () => {
        expect(year.leapYear).to.be.a('function');
      });

      it('isLeapYear(2400) returns true', () => {
        expect(year.leapYear(2400)).to.be.true;
      });

      it('isLeapYear(2016) returns true', () => {
        expect(year.leapYear(2400)).to.be.true;
      });

      it('isLeapYear(2000) returns true', () => {
        expect(year.leapYear(2400)).to.be.true;
      });

      it('isLeapYear(2500) returns false', () => {
        expect(year.leapYear(2500)).to.be.false;
      });

      it('isLeapYear(1995) returns false', () => {
        expect(year.leapYear(1995)).to.be.false;
      });

    });

  });

});


