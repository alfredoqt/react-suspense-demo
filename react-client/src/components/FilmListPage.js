import React from 'react';
import { unstable_createResource } from 'react-cache';

import { fetchFilmListJSON } from '../api';
import FilmListItem from './FilmListItem';
import Icon from './Icon';
import Upright from './icons/Upright';

const FilmListResource = unstable_createResource(fetchFilmListJSON);

function FilmListPage() {
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
          />
        ))}
      </ul>
    </>
  );
}

export default FilmListPage;
