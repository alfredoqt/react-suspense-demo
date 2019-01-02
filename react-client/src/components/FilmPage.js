import React from 'react';
import PropTypes from 'prop-types';
import FilmDetails from './FilmDetails';

class FilmPage extends React.PureComponent {
  render() {
    const { id } = this.props;
    return <FilmDetails id={id} />;
  }
}

FilmPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default FilmPage;
