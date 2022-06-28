// File: thermostat.test.js

const { exportAllDeclaration } = require('@babel/types');
const Thermostat = require('./thermostat');

describe( 'Thermostat class', () => {
  it( 'starts with initial temperature 20 degrees', () => {
    const thermo = new Thermostat();
    expect(thermo.getTemp()).toBe(20);
  });
  it( 'increases temperature by 1 degree at a time within allowed range', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    expect(thermo.getTemp()).toBe(22);
  });
});
