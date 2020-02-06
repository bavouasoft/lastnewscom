let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let noteSchema = new Schema({
  note: String
});
let Note = mongoose.model("Note", noteSchema);
module.exports = Note;
