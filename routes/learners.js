const express = require("express");
const router = express.Router();

/*
    At this point in the code, we're expecting the URL to look something like this:
        http://localhost:3000/learners

    Here, we have two different routers that account for two
    different locations within the URL for learners. In this 
    first route, it is simply the default of our current URL.
    Remember, if you're simply posting this URL within your
    search engine, it will prompt the GET HTTP method. To see
    the POST response, you'll need to prompt the URL with 
    something like Postman.
*/
router
  .route("/")
  .get((req, res) => {
    // covers GET requests to http://localhost:3000/learners/
    res.send("This is the GET learner page");
  })
  .post((req, res) => {
    // covers POST requests to http://localhost:3000/learners/
    res.send("This is the POST learner page");
  });
// We can keep adding HTTP methods to http://localhost:3000/learners/, so long as it already hasn't been used (so we can't have 2 .get methods).

/*
    This second route will cover URL's structured like this:
        http://localhost:3000/learners/52

    This URL structure is very similar to the URL above, except
    this one uses a variable that is accesable through req.params.
    First, we enter the '/learners' path. Then, we go down the 
    '/:learnedID' path, which is really just filler for whatever the
    user wants to enter. Think of "learnerID" as the name for the 
    variable that's being filled in by the URL.
*/

router
  .route("/:learnerID")
  .get((req, res) => {
    // covers GET requests to http://localhost:3000/learners/:learnerID/
    res.send(`GET learner ID = ${req.params.learnerID}`);
  })
  .put((req, res) => {
    // covers PUT requests to http://localhost:3000/learners/:learnerID/
    res.send(`PUT learned ID = ${req.params.learnerID}`);
  });
// We can keep adding HTTP methods to http://localhost:3000/learners/:learnersID/, so long as it already hasn't been used (so we can't have 2 .get methods).

// This whole time we've been defining our variable "router," and exporting it like this
// allows for all the work we've done to be imported in our main file.
module.exports = router;
