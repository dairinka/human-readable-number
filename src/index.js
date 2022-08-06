module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenGroup = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundredNum = 'hundred';
   
  
    const numStr = number.toString();
    const lengthNum = numStr.length;
    let result = '';
  
    result = lengthNum == 1? `${units[number] }` :
             (lengthNum == 2 && numStr[1] == '0')? `${dozens[numStr[0] - 1]}`:
             (lengthNum == 2 && number < 20)? `${tenGroup[numStr[1]]}`:
             (lengthNum == 2 && number > 20)? `${dozens[+numStr[0] - 1]} ${units[+numStr[1]]}`:
             (lengthNum == 3 && numStr[1] == '0' && numStr[2] == '0')? `${units[numStr[0]]} ${hundredNum}`:
             (lengthNum == 3 && numStr[1] == '0')? `${units[numStr[0]]} ${hundredNum} ${units[numStr[2]]}`:
             (lengthNum == 3 && numStr[1] == '1')? `${units[numStr[0]]} ${hundredNum} ${tenGroup[numStr[2]]}`:
             (lengthNum == 3 && numStr[2] == '0')? `${units[numStr[0]]} ${hundredNum} ${dozens[+numStr[1] - 1]}`:
             `${units[numStr[0]]} ${hundredNum} ${dozens[+numStr[1] - 1]} ${units[numStr[2]]}`;
  
             return result;
  }
