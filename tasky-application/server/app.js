// This is the entry point

import express from "express";

import fs from "fs/promises";

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
    let body = req.body;
    // console.log(email);
    if (

      !firstname ||
      !lastname ||
      !password ||
      !password2 ||
   
      !email ||
      !phone ||
      !address 
   
    ) {
      return res.status(400).json({ "error": "some fields are missing" });
    }
    if (password !== password2) {
      return res.status(400).json({ "error": "Password does not match" });
    }

    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    fileData.push(body);
    await fs.writeFile("data.json", JSON.stringfy(fileData));
    res.status(200).json({ success: "Sign Up Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server Started at the Port", port);
});

