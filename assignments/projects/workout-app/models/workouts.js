var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  exercise: String,
  weight: String,
  reps: String,
});

module.exports = mongoose.model("Workout", WorkoutSchema);
