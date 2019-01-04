const FilmModel = require('../db_models/film');
const CriticModel = require('../db_models/critic');
const { delay } = require('../utils/async');

const handlers = {};

handlers.post = async (req, res, next) => {
  try {
    const {
      name,
      critics_consensus,
      audience_rating,
      tomatometer,
      poster,
      grossing
    } = req.body;

    const newFilm = await FilmModel.create({
      name,
      critics_consensus,
      audience_rating,
      tomatometer,
      poster,
      grossing
    });

    return res.send(newFilm);
  } catch (e) {
    next(e);
  }
};

handlers.getList = async (req, res, next) => {
  try {
    const films = await FilmModel.find({}, 'name tomatometer grossing');
    return res.send(films);
  } catch (e) {
    next(e);
  }
};

handlers.getDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await FilmModel.findById(
      id,
      'name tomatometer grossing audience_rating critics_consensus poster'
    );
    return res.send(film);
  } catch (e) {
    next(e);
  }
};

handlers.getReviews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const critics = await CriticModel.find({
      film: id
    });

    await delay(2000); // Fake a delay
    return res.send(critics);
  } catch (e) {
    next(e);
  }
};

handlers.postReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { author, author_company, description, rating } = req.body;

    const critic = await CriticModel.create({
      author,
      author_company,
      description,
      film: id,
      rating
    });

    await FilmModel.updateOne(
      {
        _id: id
      },
      { $push: { critics: critic._id } }
    );

    return res.send(critic);
  } catch (e) {
    next(e);
  }
};

handlers.delete = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    await FilmModel.deleteOne({
      _id
    });
    return res.send({ message: 'Resource deleted' });
  } catch (e) {
    next(e);
  }
};

module.exports = handlers;
