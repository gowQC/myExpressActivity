const express = require("express");
const router = express.Router();

/*
    At this point, our URL should look something like this:
        http://localhost:3000/teachers

    Here, we have two different routers that account for two
    different locations within the URL for teachers. In this 
    first route, it is simply the default of our current URL.
    Remember, if you're simply posting this URL within your
    search engine, it will prompt the GET HTTP method. To see
    the POST response, you'll need to prompt the URL with 
    something like Postman.
*/

router
  .route("/")
  .get((req, res) => {
    res.send("Teachers page");
  })
  .post((req, res) => {
    res.send("POST for teachers");
  });

/*
    This second route will cover URL's that look like this:
        http://localhost:3000/teachers/27

    This URL structure is very similar to the URL above, except
    this one uses a variable that is accesable through req.params.
    First, we enter the '/learners' path. Then, we go down the 
    '/:learnedID' path, which is really just filler for whatever the
    user wants to enter. Think of "learnerID" as the name for the 
    variable that's being filled in by the URL.
*/

router
  .route("/:teacherID")
  .get((req, res) => {
    res.send(`GET Teacher ID = ${req.params.learnerID}`);
  })
  .put((req, res) => {
    res.send(`PUT Teacher ID = ${req.params.learnerID}`);
  });

module.exports = router;
