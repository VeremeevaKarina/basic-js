module.exports = function repeater(str, options) {
  let strAdd = String(str);
  let result = '';
  if (options.hasOwnProperty("addition")) {
    strAdd += String(options.addition);
  }
  if (options.hasOwnProperty("additionRepeatTimes")) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      strAdd += (options.additionSeparator || "|") + options.addition;
    }
  }
  if (options.hasOwnProperty("repeatTimes")) {
    for (let i = 1; i < options.repeatTimes; i++) {
      result += strAdd + (options.separator || "+");
    }
    result += strAdd;
  } else {
    result = strAdd;
  }
  return result;
};