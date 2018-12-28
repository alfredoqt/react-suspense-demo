const { Router } = require('express');

const FilmHandler = require('../request_handlers/film');

const router = Router();

router.post('/', FilmHandler.post);
router.post('/:id/review', FilmHandler.postReview);
router.get('/', FilmHandler.getList);
router.get('/:id/details', FilmHandler.getDetails);
router.get('/:id/reviews', FilmHandler.getReviews);
router.delete('/:id', FilmHandler.delete);

module.exports = router;
