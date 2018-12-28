const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CriticSchema = new Schema({
  author: String,
  author_company: String,
  description: String,
  film: {
    type: Schema.Types.ObjectId,
    ref: 'film'
  },
  rating: Number
});

module.exports = mongoose.model('critic', CriticSchema);
