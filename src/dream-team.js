const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let team = "";
  for (let i = 0; i < members.length; i++){
    let name = members[i];
    if (typeof name === 'string') {
      team += name.trim()[0].toUpperCase();
    }
  }
  return team.split('').sort().join('');
};
