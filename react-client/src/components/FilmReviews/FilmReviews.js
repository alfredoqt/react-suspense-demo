import React from 'react';
import PropTypes from 'prop-types';
import createResource from '../../utils/createResource';

import { fetchFilmReviewsJSON } from '../../api';

import './FilmReviews.css';
import FilmReview from '../FilmReview';

const FilmReviewsResource = createResource(fetchFilmReviewsJSON);

function FilmReviews({ id }) {
  const reviews = FilmReviewsResource.read(id);

  if (!reviews.length) {
    return (
      <p
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}
      >
        No reviews yet.
      </p>
    );
  }

  return (
    <ul className="FilmReviewsContainer">
      {reviews.map(review => (
        <FilmReview
          key={review._id}
          author={review.author}
          authorCompany={review.author_company}
          description={review.description}
          rating={review.rating}
        />
      ))}
    </ul>
  );
}

FilmReviews.propTypes = {
  id: PropTypes.string.isRequired
};

export default FilmReviews;
