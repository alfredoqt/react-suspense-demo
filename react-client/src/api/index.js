import { getJSON } from '../utils/fetch';

export function fetchFilmListJSON() {
  return getJSON('http://localhost:4000/film');
}

export function fetchFilmDetailsJSON(id) {
  return getJSON(`http://localhost:4000/film/${id}/details`);
}

export function fetchFilmReviewsJSON(id) {
  return getJSON(`http://localhost:4000/film/${id}/reviews`);
}
