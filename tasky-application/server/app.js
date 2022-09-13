// This is the entry point

import express from "express";

import fs from "fs/promises";

import bcrypt from "bcrypt";

import randomString from "../utils/randomString.js";
// import { fstatSync } from "fs";
// instatantiation - all express things are stored as class
// all methods are trigerred inside the app.js that are in the express
const app = express();

const port = 5000;

// JSON body parser
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: "Welcome To The Tasky Application" });
});

app.post("/api/signup", async (req, res) => {
  
  try {
    // console.log(req.body);
    let { firstname, lastname, email, password, password2, address, phone } =
      req.body;
    // let body = req.body;



    // console.log(email)
    if (
      !email || !firstname || !lastname || !phone || !address || !password || !password2
    ) {
      return res.status(400).json({ "error": "some fields are missing" });
    }
    if (password !== password2) {
      return res.status(400).json({ "error": "Password does not match" });
    }

  
    
    // Check Duplication of Email & Mobile
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    let emailFound = fileData.find((ele)=> ele.email == email)
    console.log(emailFound)
    // if(emailFound){
    //   return res.status(409)
    // }
    
    password = await bcrypt.hash(password, 12);

    // Generate a 12 Digit Rnadom String for user_id
    let user_id = randomString(16);
    console.log(user_id);

    let userData = { user_id, filename, lastname, email, password, address}
    userData.tasks=[];
    // fileData.push(body);
    // await fs.writeFile("data.json", JSON.stringfy(fileData));
    fileData.push(userData);
    await fs.writeFile("data.json", JSON.stringify(fileData));
    res.status(200).json({ success: "Sign Up Successfull" });
  } 
  
    catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server Started at the Port", port);
});

