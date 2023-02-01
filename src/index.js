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
  for (let i = 0; i < expr.length; i += 10) {
    const binaryLetter = expr.slice(i, i + 10);
    console.log(binaryLetter);
    let morseResult = "";

    for (let x = 0; x < binaryLetter.length; x += 2) {
      let slisedLetter = binaryLetter.slice(x, x + 2);
      //console.log(slisedLetter);
      if (slisedLetter !== "00" && slisedLetter === "10") {
        morseResult += ".";
      } else if (slisedLetter !== "00" && slisedLetter === "11") {
        morseResult += "-";
      }
      console.log(morseResult);
    }
  }
}

module.exports = {
  decode,
};
