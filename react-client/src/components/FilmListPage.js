import React from 'react';
import { unstable_createResource } from 'react-cache';
import { fetchFilmListJSON } from '../api';

const FilmListResource = unstable_createResource(fetchFilmListJSON);

function FilmListPage(props) {
  return (
    <>
      <h1>Top Box</h1>
      <ul>
        {FilmListResource.read().map(film => (
          <li key={film._id}>{film.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FilmListPage;
