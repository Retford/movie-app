import Image from 'next/image';
import { FetchMovieDetail } from '../fetch/FetchMovie';

const page = async ({ params }) => {
  const detailMovie = await FetchMovieDetail(params);
  console.log(params);
  console.log(detailMovie);
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`}
      alt={detailMovie.id}
      width='300'
      height='300'
      className='rounded-md w-[12rem] h-[12rem] xl:w-[250px] xl:h-auto'
    ></Image>
  );
};

export default page;
