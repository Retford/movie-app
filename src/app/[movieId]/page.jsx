import Image from 'next/image';
import { FetchMovieDetail } from '../fetch/FetchMovie';
import DetailMovie from '@/components/DetailMovie';

const page = async ({ params }) => {
  const detailMovie = await FetchMovieDetail(params);

  return <DetailMovie detailMovie={detailMovie} />;
};

export default page;
