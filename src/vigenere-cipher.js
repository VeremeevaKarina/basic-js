const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.isDirect = direction;
  }
  encrypt(message, key) {
    if(arguments.length <= 1) {
      throw new Error("Uncorrect input data!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let cipherArr = [];
    let index = 0;

    for(let i = 0; i < message.length; i++) 
    {
        let code = message[i].charCodeAt(0);
        if(code >= 65 && code <= 90) 
        {
            let letter = String.fromCharCode((code + key.charCodeAt(index)) % 26 + "A".charCodeAt(0));
            cipherArr.push(letter);
            if(index != key.length - 1) index++;
            else index = 0;
        }
        else {
          cipherArr.push(message[i])
        };         
    }
    if(this.isDirect == false) {
      cipherArr.reverse()
    };
    return cipherArr.join("");       
  }    
  decrypt(encryptedMessage, key) {
    if(arguments.length <= 1) {
      throw new Error("Uncorrect input data!");
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let arr = [];
    let index = 0;
    for(let i = 0; i < encryptedMessage.length; i++) {
        let code = encryptedMessage[i].charCodeAt(0);
        if(code >= 65 && code <= 90) 
        {
            let letter = String.fromCharCode((code + 26 - key.charCodeAt(index)) % 26 + "A".charCodeAt(0));
            arr.push(letter);
            if(index != key.length - 1) index++;
            else index = 0;
        }
        else arr.push(encryptedMessage[i]);         
    }
    if(this.isDirect == false) {
      arr.reverse()
    };
    return arr.join('');
  }
}

module.exports = VigenereCipheringMachine;