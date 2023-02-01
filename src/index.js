const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    const binaryLetter = expr.slice(i, i + 10);
    //console.log(binaryLetter);
    let morseResult = "";
    let str = "";
    //let arr = [];
    if (binaryLetter === "**********") {
      result += " ";
    } else {
      for (let x = 0; x < binaryLetter.length; x += 2) {
        let slisedLetter = binaryLetter.slice(x, x + 2);
        //console.log(slisedLetter);
        if (slisedLetter === "10") {
          morseResult += ".";
        } else if (slisedLetter === "11") {
          morseResult += "-";
        }
        //console.log(morseResult);
      }

      //console.log(morseResult)
      Object.keys(MORSE_TABLE).map((morseLetter) => {
        //console.log(morseResult);
        //console.log(MORSE_TABLE[morseLetter])
        if (morseLetter === morseResult) {
          //console.log(Object.values[morseLetter])
          // arr.push(Object.values(morseLetter));
          // str = arr.join(' ');
          result += MORSE_TABLE[morseLetter];
          //console.log(result)
        }
        //console.log(str);
      });
    }
  }
  return result;
}

module.exports = {
  decode,
};
