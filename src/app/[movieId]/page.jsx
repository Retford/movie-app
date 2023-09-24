import Image from 'next/image';
import {
  FetchMovieDetail,
  FetchRepartoPrincipal,
  FetchTrailerMovie,
} from '../fetch/FetchMovie';
import DetailMovie from '@/components/DetailMovie';

const page = async ({ params }) => {
  const detailMovie = await FetchMovieDetail(params);
  const trailerMovie = await FetchTrailerMovie(params);
  const repartoPrincipal = await FetchRepartoPrincipal(params);

  return (
    <>
      <DetailMovie
        detailMovie={detailMovie}
        trailerMovie={trailerMovie}
        repartoPrincipal={repartoPrincipal}
      />
    </>
  );
};

export default page;
