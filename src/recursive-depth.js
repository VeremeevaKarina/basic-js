const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1) {
    if(!Array.isArray(arr)) {
      throw Error();
    }
    
    if(arr.some(elem => Array.isArray(elem))) {
      arr = arr.flat();
      counter++;
    } else {
      return counter;
    }
    return this.calculateDepth(arr, counter)
  }
};