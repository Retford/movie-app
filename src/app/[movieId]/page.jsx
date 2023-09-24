import Image from 'next/image';
import { FetchMovieDetail, FetchTrailerMovie } from '../fetch/FetchMovie';
import DetailMovie from '@/components/DetailMovie';

const page = async ({ params }) => {
  const detailMovie = await FetchMovieDetail(params);
  const trailerMovie = await FetchTrailerMovie(params);

  return (
    <>
      <DetailMovie detailMovie={detailMovie} trailerMovie={trailerMovie} />
    </>
  );
};

export default page;
