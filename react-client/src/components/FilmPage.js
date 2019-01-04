import React from 'react';
import PropTypes from 'prop-types';
import FilmDetails from './FilmDetails';
import Icon from './Icon';
import ChevronRight from './icons/ChevronRight';
import FilmReviews from './FilmReviews';
import Spinner from './Spinner';

class FilmPage extends React.PureComponent {
  render() {
    const { id, onBack } = this.props;
    return (
      <>
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          <Icon
            onClick={onBack}
            path={ChevronRight}
            size={2}
            style={{
              transform: 'rotate(180deg)'
            }}
          />
        </div>
        <FilmDetails id={id} />
        <React.Suspense
          maxDuration={500}
          fallback={<Spinner size="medium" variant="centered" />}
        >
          <FilmReviews id={id} />
        </React.Suspense>
      </>
    );
  }
}

FilmPage.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired
};

export default FilmPage;
