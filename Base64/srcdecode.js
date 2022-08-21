import readlineSync from "readline-sync";
// import choice from "./main.js"

let input;
function Decoding(input) {
  let inputString = readlineSync.question(`Enter the code you want to decode:`);
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  inputString = inputString.split("");
  base64 = base64.split("");
  // console.log(inputString);
  //  inputString = ['S','E','V','M','T','E','8','=']
  // let check = inputString.map(string => (base64.includes == inputString))

  // base64todecimal
  let base64todec = inputString.map((dec) => base64.indexOf(dec));
  //   console.log(base64todec);

  // Converting -1 to 1
  var flag = 0;
  if (inputString[inputString.length - 1] === "=") {
    flag = 1;
  }

  base64todec = base64todec.filter((e) => e !== -1);
  console.log(`base64code : ${base64todec}`);

  //   dectobinary
  let dectobin = base64todec.map((dec) => dec.toString(2));
  console.log(`dectobinary = `, dectobin);
  // to6bitbinaryArray

  let i = 0;
  while (i < dectobin.length) {
    if (dectobin[i].length < 6) {
      dectobin[i] = "0" + dectobin[i];
    }

    i++;
  } //console.log(`6bitbinary =`,dectobin)

  let bin6bit = dectobin.map((bin) => {
    while (bin.length < 6) {
      bin = "0" + bin;
    }
    return bin;
  });
  console.log(`6bitbin :`, bin6bit);

  let last = bin6bit.length - 1;
  if (flag == 1) {
    if (bin6bit[last].lastIndexOf("0000") !== -1)
      bin6bit[last] = bin6bit[last].slice(0, bin6bit[last].lastIndexOf("0000"));
    else if (bin6bit[last].lastIndexOf("00") !== -1)
      bin6bit[last] = bin6bit[last].slice(0, bin6bit[last].lastIndexOf("00"));
  }

  // removing last zeroes to equal count
  console.log(`Binary8bit :`, bin6bit);
  let oneBinary = bin6bit.join("").split("");
  // split into 8 bits binary
  //   let bin8bit =

  let bin8bit = [];
  while (oneBinary.length != 0) {
    bin8bit.push(oneBinary.splice(0, 8).join(""));
  }
  //   bin8bit()
  //   console.log("Binary8bit", bin8bit);

  // convert to decimal
  let bintoDecimal = bin8bit.map((value) => parseInt(value, 2));
  console.log("Binarytodecimal :", bintoDecimal);

  // ASCII Array, join, display

  let finalDecimalValue = bintoDecimal.map((val) => String.fromCharCode(val));
  if (finalDecimalValue => 97 && finalDecimalValue <= 122)
    console.log("finalDecimalValue :", finalDecimalValue.join(""));
  else if (finalDecimalValue => 65 && finalDecimalValue <= 90)
    console.log("finalDecimalValue :", finalDecimalValue.join(""));
  else {
    console.clear();
    console.log("Invalid Input");
  }
  //   console.log(finalDecimalValue.join(""));
}

// decoding(input);
// choice();

export default Decoding;
