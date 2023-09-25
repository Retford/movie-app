import Image from 'next/image';
import {
  FetchMovieDetail,
  FetchMovieRecomendations,
  FetchRepartoPrincipal,
  FetchSimilarMovie,
  FetchTrailerMovie,
} from '../fetch/FetchMovie';
import DetailMovie from '@/components/MovieDetails/DetailMovie';

const page = async ({ params }) => {
  const detailMovie = await FetchMovieDetail(params);
  const trailerMovie = await FetchTrailerMovie(params);
  const repartoPrincipal = await FetchRepartoPrincipal(params);
  const recommendationsMovie = await FetchMovieRecomendations(params);
  const similarMovie = await FetchSimilarMovie(params);

  return (
    <DetailMovie
      detailMovie={detailMovie}
      trailerMovie={trailerMovie}
      repartoPrincipal={repartoPrincipal}
      recommendationsMovie={recommendationsMovie}
      similarMovie={similarMovie}
    />
  );
};

export default page;
