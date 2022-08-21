// javascript.js
// console.log('hello');
let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// base64 = base64.split('');
let inputString = ["S", "E", "V", "M", "T", "E", "8", "="];

// console.log(base64.charCodeAt('a'));

let teststore = inputString.map((dec) => base64.indexOf(dec));
// console.log(teststore);

// let  = ['001100','111100']

// let l = inputString.length;

// console.log(inputString[l-1].lastIndexOf('00'))

let bin6bit = [
  "010010",
  "000100",
  "010101",
  "001100",
  "010011",
  "000100",
  "110000",
];
console.log(bin6bit);
let flag = 1; // one "="
let last = bin6bit.length - 1;
if (flag == 1) {
  if (bin6bit[last].lastIndexOf("0000") !== -1) {
    console.log(bin6bit[last].lastIndexOf("0000"));
    console.log(`flag == 1`, bin6bit[last].lastIndexOf("0000"));

    bin6bit[last] = bin6bit[last].slice(0, bin6bit[last].lastIndexOf("0000"));
    console.log(bin6bit);

    
  } else if (bin6bit[last].lastIndexOf("00") !== -1) {
    console.log(bin6bit[last].lastIndexOf("00"));

    console.log(`flag != 1`, bin6bit[last].lastIndexOf("00"));

    bin6bit[last] = bin6bit[last].slice(0, bin6bit[last].lastIndexOf("00"));
    console.log(bin6bit);
  }
}
