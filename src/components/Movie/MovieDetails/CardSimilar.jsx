import { baseUrlImage } from '@/app/fetch/FetchMovie';
import Link from 'next/link';

const CardSimilar = ({ similarMovie }) => {
  const { poster_path, title, id, popularity } = similarMovie;

  let pathUrlImage =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  if (poster_path === null) {
    pathUrlImage;
  } else {
    pathUrlImage = `${baseUrlImage}${poster_path}`;
  }
  return (
    <>
      <Link href={`${id}`}>
        <img
          src={`${pathUrlImage}`}
          width={200}
          height={200}
          alt={title}
          className='rounded-3xl object-cover h-[311px] w-[345px]'
        />
      </Link>
      <div className='pt-4 font-bold'>{title}</div>
      <span className='text-ms font-bold text-green-500'>{popularity}</span>
    </>
  );
};

export default CardSimilar;
