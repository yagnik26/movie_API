const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
  Name : String,
  Year : Number,
  Rating : Number,
  Poster : String,
  Country : String,
  Language : String,
  Genre : String
});

let movie = mongoose.model("movieDetail" , movieSchema);

module.exports = movie;