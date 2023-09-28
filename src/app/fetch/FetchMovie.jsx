export const baseUrlImage = 'https://image.tmdb.org/t/p/w500/';
const baseUrlAPI = 'https://api.themoviedb.org/3/movie';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
  },
};

export const FetchMovieDetail = async ({ movieId }) => {
  const res = await fetch(`${baseUrlAPI}/${movieId}?language=es-PE`, options);
  const data = res.json();
  return data;
};

export const DataCategory = async ({ category }) => {
  const res = await fetch(`${baseUrlAPI}/${category}?language=es-PE`, options);
  const data = res.json();
  return data;
};

export const ApiMovie = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?language=es-PE',
    options
  );
  const data = await res.json();
  return data;
};

export const FetchTrailerMovie = async ({ movieId }) => {
  const res = await fetch(
    `${baseUrlAPI}/${movieId}/videos?language=es-PE`,
    options
  );
  const data = await res.json();
  return data;
};

export const FetchRepartoPrincipal = async ({ movieId }) => {
  const res = await fetch(
    `${baseUrlAPI}/${movieId}/credits?language=es-PE`,
    options
  );
  const data = await res.json();
  return data;
};

export const FetchMovieRecomendations = async ({ movieId }) => {
  const res = await fetch(
    `${baseUrlAPI}/${movieId}/recommendations?language=es-PE`,
    options
  );
  const data = await res.json();
  return data;
};

export const FetchActor = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?language=es-PE`,
    options
  );

  const data = await res.json();
  return data;
};

export const FetchDetailActor = async ({ actorId }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}?append_to_response=movie_credits%2Cexternal_ids&language=es-PE`,
    options
  );

  const data = await res.json();
  return data;
};

export const FetchSimilarMovie = async ({ movieId }) => {
  const res = await fetch(
    `${baseUrlAPI}/${movieId}/similar?language=es-PE`,
    options
  );

  const data = await res.json();
  return data;
};

export const FetchSearchMovie = async (keyword) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=es-PE`,
    options
  );

  const data = await res.json();
  return data;
};
