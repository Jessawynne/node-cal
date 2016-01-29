'use strict';


//module.exports = function (start, stop) {
  //var range = [];

  //if(!stop) {
    //stop = start;
    //start = 0;
  //}

  //for (var i = 0; start < stop; start++, i++) {
   //range[i] = start;
  //}

  //return range;
//};

function generateHeader (year, month) {
  switch (month) {
    case 3:
        return `     March ${year}\n`;
        break;
    case 4:
        return `     April ${year}\n`;
        break;
    case 5:
        return `      May ${year}\n`;
        break;
    case 6:
        return `      June ${year}\n`;
        break;
    case 7:
        return `      July ${year}\n`;
        break;
    case 8:
        return `    August ${year}\n`;
        break;
    case 9:
        return `   September ${year}\n`;
        break;
    case 10:
        return `    October ${year}\n`;
        break;
    case 11:
        return `    November ${year}\n`;
        break;
    case 12:
        return `    December ${year}\n`;
        break;
    case 13:
        return `    January ${year}\n`;
        break;
    case 14:
        return `    February ${year}\n`;
        break;
    default:
        return "Error";
  }
}

//let center = function (month, year) {
  //const date = new Date();

  //const monthArr = [`March ${year}\n`, `April ${year}\n`;
        //break;
    //case 5:
        //return `      May ${year}\n`;
        //break;
    //case 6:
        //return `      June ${year}\n`;
        //break;
    //case 7:
        //return `      July ${year}\n`;
        //break;
    //case 8:
        //return `    August ${year}\n`;
        //break;
    //case 9:
        //return `   September ${year}\n`;
        //break;
    //case 10:
        //return `    October ${year}\n`;
        //break;
    //case 11:
        //return `    November ${year}\n`;
        //break;
    //case 12:
        //return `    December ${year}\n`;
        //break;
    //case 13:
        //return `    January ${year}\n`;
        //break;
    //case 14:
        //return `    February ${year}\n`;]



  //let header = Math.floor((15 - (('${month}').length)) / 2) + ' ' + '${year}\n';



  ////let arr = ['${month}', '${year}'];
  ////for (let [month, year] of arr) {
    ////let arrHeader = Math.floor((15 - (month.length)) / 2) + ' ' + year;
    ////let arrSpace = arrHeader.split('\n');
  ////};
  //return header;
//};

module.exports = {
  generateHeader: generateHeader
};
