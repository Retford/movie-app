import { baseUrlImage } from '@/app/fetch/FetchMovie';
import Image from 'next/image';
import Link from 'next/link';

const CardActor = ({ actor }) => {
  const { profile_path, name, character, id } = actor;

  let pathUrlImage =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  if (profile_path === null) {
    pathUrlImage;
  } else {
    pathUrlImage = `${baseUrlImage}${profile_path}`;
  }
  return (
    <>
      <Link href={`/actor/${id}`}>
        <Image
          src={`${pathUrlImage}`}
          width={200}
          height={200}
          alt={name}
          className='rounded-3xl object-cover h-[311px] w-[345px]'
        ></Image>
      </Link>
      <div className='pt-4'>{character}</div>
      <span className='text-ms font-bold'>{name}</span>
    </>
  );
};

export default CardActor;
