import React from 'react';
import PropTypes from 'prop-types';
import createResource from '../utils/createResource';

import { fetchFilmListJSON } from '../api';
import FilmListItem from './FilmListItem';
import Icon from './Icon';
import Upright from './icons/Upright';

const FilmListResource = createResource(fetchFilmListJSON);

function FilmListPage({ onFilmClick, loadingId }) {
  return (
    <>
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span style={{ marginRight: '8px' }}>Top Box</span>
        <Icon path={Upright} size={1.5} />
      </h1>
      <ul>
        {FilmListResource.read().map(film => (
          <FilmListItem
            key={film._id}
            name={film.name}
            tomatometer={film.tomatometer}
            grossing={film.grossing}
            onClick={() => onFilmClick(film._id)}
            isLoading={!!loadingId && loadingId === film._id}
          />
        ))}
      </ul>
    </>
  );
}

FilmListPage.propTypes = {
  onFilmClick: PropTypes.func.isRequired,
  loadingId: PropTypes.string
};

FilmListPage.defaultProps = {
  loadingId: null
};

export default FilmListPage;
