// we need express - standard call
const express = require("express");
// we have express, now we use it
const app = express();
// setting up our port
const PORT = 3000;

// these variables are grabbing the routes we've made in the /routes folder, which has 2 files in it
const learners = require("./routes/learners");
const teachers = require("./routes/teachers");

// middleware - essentially where we store the routes to specific page URL's
app.use("/learners", learners); // will handle '/learners'
app.use("/teachers", teachers); // will handle '/teachers'

/*** Necessary stuff that should be included in all express servers ***/

// our default starting point in our server
app.get("/", (req, res) => {
  res.send("The root. Basically our starting point.");
});

// tells server to start listening for visitors (anyone searching our URL's/routes)
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
