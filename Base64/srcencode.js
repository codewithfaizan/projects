// Base64 encoding
import readlineSync from "readline-sync";
import choice from "./main.js";

function Encoding() {
  let inputString = readlineSync.question("Enter the String : ");

  // Split character letters
  let splitString = inputString.split("");
  console.log(`The String is :`, splitString);

  // Get Ascii decimal
  let ASCIIcodes = splitString.map((char) => char.charCodeAt());
  console.log("Ascii array is :", ASCIIcodes);

  //GET ASCII BINARY
  let binarycodes = ASCIIcodes.map((num) => num.toString(2)); //2 for binary, 8 for octal, 16 for hexadecimal
  console.log(binarycodes);

  // Conversion of binary to 8 bit(even if the binary has 2bit, 4 bit , 6bit it has to change to 8bit string)
  let binarycodes8bit = binarycodes.map((bin) => {
    while (bin.length < 8) {
      bin = "0" + bin;
    }
    return bin;
  });
  console.log(`8bit binary code is : `, binarycodes8bit);

  let oneBinary = binarycodes8bit.join("").split("");
  console.log(`onebinary`,oneBinary);
  // console.log(oneBinary);

  // SPLITTING INTO 6 BITS
  let binarycodes6bit = [];
  while (oneBinary != 0) {
    binarycodes6bit.push(oneBinary.splice(0, 6).join(""));
  }
  // console.log(binarycodes6bit);

  // padding and add =
  let lastElement = binarycodes6bit[binarycodes6bit.length - 1];
  if (lastElement != 6) {
    var counter = 0;
    while (lastElement.length < 6) {
      lastElement = lastElement + "0";
      counter++;
    }
    binarycodes6bit[binarycodes6bit.length - 1] = lastElement;
  }
  console.log("Binary in 6 bits including the last element :", binarycodes6bit);

  // Base64 decimals
  let bintoDecimal = binarycodes6bit.map((str) => parseInt(str, 2));
  console.log("Base64 Decimals : ", bintoDecimal);

  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // decimal to base64 with =
  let base64final = bintoDecimal.map((dec) => base64[dec]);
  console.log("base64 String :", base64final);
  if (counter == 2) {
    base64final.push("=");
  } else if (counter == 4) {
    base64final.push("==");
  }
  let result = base64final.join("")
  console.log("Encoded String to base64:", );
  if (result => 97 && result <= 122)
  console.log("result :", result);
else if (result => 65 && result <= 90)
  console.log("result :", result);
else {
  console.clear();
  console.log("Invalid Input");
}
}

// Encoding();
// choice();

export default Encoding