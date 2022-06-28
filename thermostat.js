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


  static getMaxWithPowerSaving() {
    return Thermostat.maxWithPowerSaving;
  }

  static getMaxNoPowerSaving() {
    return Thermostat.maxNoPowerSaving;
  }

  static getResetTemp() {
    return Thermostat.resetTemp;
  }

  static getUpAmount() {
    return Thermostat.upAmount;
  }

  static getDownAmount() {
    return Thermostat.downAmount;
  }

  getTemp() {
    return this.temp;
  }

  setTemp( temp ) {
    this.temp = temp;
  }

  setPowerSavingMode(value) {
    this.isPowerSaving = value;
  }

  getPowerSavingMode() {
    return this.isPowerSaving;
  }

  reset() {
    this.setTemp(Thermostat.getResetTemp());
  }
  up() {
    this.temp += Thermostat.getUpAmount();
    if(this.getPowerSavingMode() === true ) {
      if( this.getTemp() > Thermostat.getMaxWithPowerSaving()) {
        this.setTemp(Thermostat.getMaxWithPowerSaving()); 
      }
    }
    if(this.getPowerSavingMode() === false ) {
      if( this.getTemp() > Thermostat.getMaxNoPowerSaving()) {
        this.setTemp(Thermostat.getMaxNoPowerSaving()); 
      }
    }
  }
    
  down() {
    this.temp -= Thermostat.getDownAmount();
  }
  
}

module.exports = Thermostat;

