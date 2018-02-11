var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Note = require("./model/notes");

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//now we can set the route path & initialize the API
router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

//adding the /comments route to our /api router
router
  .route("/notes")
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Note.find(function(err, notes) {
      if (err) res.send(err);
      //responds with a json object of our database comments.
      res.json(notes);
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var note = new Note();
    //body parser lets us use the req.body
    note.exercise = req.body.exercise;
    note.weight = req.body.weight;
    note.reps = req.body.reps;
    note.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Workout successfully added!" });
    });
  });

  router.route('/notes/:note_id')


//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});




mongoose.connect(
  "mongodb://matta:Klondike!5455@ds131698.mlab.com:31698/workout-app"
);
