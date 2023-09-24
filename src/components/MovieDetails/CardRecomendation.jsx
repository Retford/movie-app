import { baseUrlImage } from '@/app/fetch/FetchMovie';
import Image from 'next/image';

const CardRecomendation = ({ movieRecomendation }) => {
  console.log(movieRecomendation);
  const { title, poster_path, popularity } = movieRecomendation;
  console.log(poster_path);

  let pathUrlImage =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  if (poster_path === null) {
    pathUrlImage;
  } else {
    pathUrlImage = `${baseUrlImage}${poster_path}`;
  }

  return (
    <>
      <Image
        src={`${pathUrlImage}`}
        width={200}
        height={200}
        alt={title}
        className='rounded-3xl object-cover h-[311px] w-[345px]'
      ></Image>
      <div>{title}</div>
      <span className='text-ms font-bold text-green-500'>{popularity}</span>
    </>
  );
};

export default CardRecomendation;
