//server/index.js
// 'use strict'
//first we import our dependencies…
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Workout = require("./models/workouts");
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  //and remove cacheing so we get the most recent workouts
  res.setHeader("Cache-Control", "no-cache");
  next();
});
//now we can set the route path & initialize the API
router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

//adding the /workouts route to our /api router
router
  .route("/workouts")
  //retrieve all workouts from the database
  .get(function(req, res) {
    //looks at our Workout Schema
    Workout.find(function(err, workouts) {
      if (err) res.send(err);
      //responds with a json object of our database workouts.
      res.json(workouts);
    });
  })

  //post new workout to the database
  .post(function(req, res) {
    var workout = new Workout();
    //body parser lets us use the req.body
    workout.exercise = req.body.exercise;
    workout.weight = req.body.weight;
    workout.reps = req.body.reps;
    workout.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Workout successfully added!" });
    });
  });

// router
//   .route("/workouts")
//   .get((req, res) => {
//     // let query = {};
//     Workout.find(req.query, (err, workouts) => {
//       if (err) return res.status(500).send(err);
//       return res.send(workouts);
//     });
//   })

router.route("/workouts/:id").get((req, res) => {
  Workout.findById(req.params.id, (err, workouts) => {
    if (err) return res.status(500).send(err);
    return res.send(workouts);
  });
});

// .post((req, res) => {
//     let newWorkout = new Workout(req.body);
//     newWorkout.save((err) => {
//         if (err) return res.status(500).send(err);
//         return res.send(newWorkout);
//     });
// });

//server.js
//Add this after our get and post routes
//Adding a route to a specific workout based on the database ID
router
  .route("/workouts/:workout_id")
  //The put method gives us the chance to update our workout based on
  //the ID passed to the route
  .put(function(req, res) {
    Workout.findById(req.params.workout_id, function(err, workout) {
      if (err) res.send(err);
      //setting the new exercise and weight to whatever was changed. If
      //nothing was changed we will not alter the field.
      req.body.exercise ? (workout.exercise = req.body.exercise) : null;
      req.body.weight ? (workout.weight = req.body.weight) : null;
      req.body.reps ? (workout.reps = req.body.reps) : null;
      //save workout
      workout.save(function(err) {
        if (err) res.send(err);
        res.json({ message: "Workout has been updated" });
      });
    });
  })
  //delete method for removing a workout from our database
  .delete(function(req, res) {
    //selects the workout by its ID, then removes it.
    Workout.remove({ _id: req.params.workout_id }, function(err, workout) {
      if (err) res.send(err);
      res.json({ message: "Workout has been deleted" });
    });
  });

//Use our router configuration when we call /api
app.use("/api", router);
//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

mongoose.connect(
  "mongodb://matthewdadams:Klondike!5455@ds249428.mlab.com:49428/workout-app"
);
