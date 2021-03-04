const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = [];
  
  for(let i = 0; i < matrix.length; i++){
    const result = matrix[i].filter((elem) => {
      return elem === '^^';
    });
    cats = cats.concat(result);
  };
  return cats.length;
};
