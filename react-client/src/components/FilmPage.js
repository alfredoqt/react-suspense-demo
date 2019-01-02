import React from 'react';
import PropTypes from 'prop-types';
import createResource from '../utils/createResource';

import { fetchFilmDetailsJSON } from '../api';

const FilmDetailsResource = createResource(fetchFilmDetailsJSON);

function FilmDetails({ id }) {
  const film = FilmDetailsResource.read(id);
  return <p>{film.poster}</p>;
}

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
