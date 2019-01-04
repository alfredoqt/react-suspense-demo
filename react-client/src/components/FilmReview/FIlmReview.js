import React from 'react';
import PropTypes from 'prop-types';

import { getTomatometerIcon } from '../../utils/ratingIcon';
import Icon from '../Icon';

import './FilmReview.css';

const FilmReview = React.memo(function FilmReview({
  author,
  authorCompany,
  description,
  rating
}) {
  let ReviewIcon = getTomatometerIcon(rating);
  return (
    <li className="FilmReviewContainer">
      <Icon path={ReviewIcon} className="FilmReviewRatingIcon" />
      <div>
        <p className="FilmReviewDescription">{description}</p>
        <p className="FilmReviewAuthor">{`${author}, ${authorCompany}`}</p>
      </div>
    </li>
  );
});

FilmReview.propTypes = {
  author: PropTypes.string.isRequired,
  authorCompany: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default FilmReview;
