import React from 'react';
import PropTypes from 'prop-types';
import FilmDetails from './FilmDetails';
import Icon from './Icon';
import ChevronRight from './icons/ChevronRight';

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
      </>
    );
  }
}

FilmPage.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired
};

export default FilmPage;
