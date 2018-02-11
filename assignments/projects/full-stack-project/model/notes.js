var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NotesSchema = new Schema({
  exercise: String,
  weight: String,
  reps: String
});

module.exports = mongoose.model("Note", NotesSchema);