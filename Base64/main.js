import readlineSync from "readline-sync";
import  Encoding  from "./srcencode.js";
import  Decoding  from "./srcdecode.js";

function run() {
  console.clear();
  const options = ["Exit", "Encode", "Decode"];

  console.log(`---Base64 Encoding and Decoding Program---`);
  console.log(`------------------------------------------`);

  options.forEach((element, index) =>
    console.log(`Press\t${index} To ${element}`)
  );

  // console.log(`------------------------------------`);
  const option = readlineSync.questionInt(`Enter : `);
  // console.log(option);
  if (option >= 0 && option < options.length) {
    switch (option) {
      case 0:
        console.log("Program Terminated");
        console.clear()
        choice()
        break;
      case 1:
        Encoding();
        choice();
        break;
      case 2:
        Decoding();
        choice();
        break;
    }
  }


}
function choice() {
    let choices = readlineSync.question(`Do you want to continue (Y/n) :`);
     if (
       choices == "y" ||
       choices == "Y" ||
       choices == "yes" ||
       choices == "Yes" ||
       choices == "YES"
     ) {
       console.clear();
       console.log(run());
     } else if (
       choices == "no" ||
       choices == "No" ||
       choices == "NO" ||
       choices == "n" ||
       choices == "N"
     ) {
       console.log("Thankyou");
       console.clear();
     } else {
       console.log("Type correctly (Y/n)");
      choice();
     }
   }
console.clear();
run();
choice()

export default choice;

