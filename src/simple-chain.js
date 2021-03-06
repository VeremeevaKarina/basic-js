const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    arguments.length > 0
      ? this.chainArr.push("( " + String(value) + " )")
      : this.chainArr.push("()");
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number') {
      this.chainArr.splice(position - 1, 1);
      return this;
    } else {
      this.chainArr.splice(0, this.getLength());
      throw new Error("Error");
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let result  = this.chainArr.join('~~');
    this.chainArr.splice(0, this.getLength());
    return result ;
  }
};

module.exports = chainMaker;