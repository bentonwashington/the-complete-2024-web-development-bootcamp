//necessary for server
//express is a module that I'm importing
import express from "express";

const app = express();
const port = 3000;

//do this here when I run localhost
app.get("/", (req, res) => {
    //variables needed for the app
    const today = new Date();
    const day = today.getDay();

    // console.log(day);
    //more variables
    let type = "a weekday";
    let adv = "it's time to work hard";

    //if its the weekend change the variables

    if (day === 0 || day === 6 ) {
        type = "the weekend";
        adv = "it's time to have some fun";

    }

//this is what we're rendering
//the variables that it will be looking for is this!
    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});