const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  name: String,
  critics_consensus: String,
  critics: [
    {
      type: Schema.Types.ObjectId,
      ref: 'critic'
    }
  ],
  tomatometer: Number,
  audience_rating: Number,
  poster: String,
  grossing: Number
});

module.exports = mongoose.model('film', FilmSchema);
