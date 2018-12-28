import { getJSON } from '../utils/fetch';

export function fetchFilmListJSON() {
  return getJSON('http://localhost:4000/film');
}
