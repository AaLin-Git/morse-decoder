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
    let morseResult = "";
    if (binaryLetter === "**********") {
      result += " ";
    } else {
      for (let x = 0; x < binaryLetter.length; x += 2) {
        let slisedLetter = binaryLetter.slice(x, x + 2);
        if (slisedLetter === "10") {
          morseResult += ".";
        } else if (slisedLetter === "11") {
          morseResult += "-";
        }
      }
      Object.keys(MORSE_TABLE).map((morseLetter) => {
        if (morseLetter === morseResult) {
          result += MORSE_TABLE[morseLetter];
        }
      });
    }
  }
  return result;
}

module.exports = {
  decode,
};
