import DetailMovie from '@/components/Movie/MovieDetails/DetailMovie';
import {
  FetchMovieDetail,
  FetchMovieRecomendations,
  FetchRepartoPrincipal,
  FetchSimilarMovie,
  FetchTrailerMovie,
} from '../fetch/FetchMovie';

const PageMovieId = async ({ params }) => {
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

export default PageMovieId;
