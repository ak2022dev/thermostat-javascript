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
  it( 'decreases temperature by 1 degree at a time within allowed range', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    thermo.down();
    expect(thermo.getTemp()).toBe(21);
  });
  it( 'can enable power-saving mode', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(true);
    expect(thermo.getPowerSavingMode()).toBe(true);
  });
  it( 'can cap max temperature with power-saving mode on', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemp()).toBe(Thermostat.getMaxWithPowerSaving());
  });
  it( 'can go to a higher temperature with power-saving mode off', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(false);
    for (let i = 0 ; i < 20 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemp()).toBe(Thermostat.getMaxNoPowerSaving());
  });

});
