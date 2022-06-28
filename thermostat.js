// File: thermostat.js

class Thermostat {

  constructor() {

    Thermostat.maxWithPowerSaving = 25;
    Thermostat.maxNoPowerSaving = 32;
    Thermostat.resetTemp = 20;
    Thermostat.upAmount = 1;
    Thermostat.downAmount = 1;

    this.temp = Thermostat.resetTemp;
    this.isPowerSaving = true;
  }

  getTemp() {
    return this.temp;
  }

  up() {
    this.temp += Thermostat.upAmount;
  }

  down() {
    this.temp -= Thermostat.downAmount;
  }

  setPowerSavingMode(value) {
    this.isPowerSaving = value;
  }

  getPowerSavingMode() {
    return this.isPowerSaving;
  }
}

module.exports = Thermostat;

