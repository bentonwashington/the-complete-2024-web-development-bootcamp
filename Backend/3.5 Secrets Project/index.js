//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//install modules
import express from "express";
import bodyParser from "body-parser";

//copy and paste
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//create app and set port
const app = express();
const port = 3000;

//create variable if user is authorized. will not be in the beginning
var userIsAuthorised = false;

//will use anytime getting info from html form
app.use(bodyParser.urlencoded({ extended: true}));

//own middleware to check the password
function passwordCheck(req, res, next){
    //creating variable for what is in the password field
    const password = req.body["password"];

    //check the password!
    if (password == "ILoveProgramming") {
        userIsAuthorised = true;
    }
    //allows flow to continue
    next();
}

//runs function
app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    });

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });