import { baseUrlImage } from '@/app/fetch/FetchMovie';
import Image from 'next/image';
import Link from 'next/link';

const CardInterpretacion = ({ movieInterpretacion }) => {
  const { title, character, id } = movieInterpretacion;
  let { poster_path } = movieInterpretacion;

  let postUrlImage =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  if (poster_path === null) {
    postUrlImage;
  } else {
    postUrlImage = `${baseUrlImage}${poster_path}`;
  }

  return (
    <>
      <Link href={`/${id}`}>
        <Image
          src={`${postUrlImage}`}
          width={200}
          height={200}
          alt={title}
          className='rounded-3xl object-cover h-[311px] w-[345px]'
        ></Image>
      </Link>
      <div className='pt-4'>{title}</div>
      <span className='text-ms font-bold'>Personaje: {character}</span>
    </>
  );
};

export default CardInterpretacion;
