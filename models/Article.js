// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  // make `title` unique to avoid duplicate in multiple scrapes
  title: {
    type: String,
    required: true,
    unique: true
  },
  // link is a required string
  // todo save summary paragraph instead of link
  link: {
    type: String,
    required: true
  },
  // `notes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the Article Object with any associated Notes
  // Saves array of notes.
  notes: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Note"
  }]
});

// This creates our model from the above schema, using mongoose's model method
// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;