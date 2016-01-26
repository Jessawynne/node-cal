'use strict';

const { expect } = require('chai');
//const cp = require('child_process');
const { execSync } = require('child_process'); //since we are not using anything else from child_process

describe('cal', () => {
  it('should handle the current month', () => {
    const goal = execSync('cal').toString();
    const output = execSync('./cal.js').toString();

    expect(output).to.equal(goal);
  });
});


