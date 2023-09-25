import Image from 'next/image';
import { baseUrlImage } from '@/app/fetch/FetchMovie';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import Interpretaciones from './Interpretaciones';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const DetailActor = ({ detailActor }) => {
  const { name, movie_credits } = detailActor;
  let {
    gender,
    biography,
    external_ids,
    profile_path,
    birthday,
    place_of_birth,
  } = detailActor;

  if (gender === 0) {
    gender = 'No establecido / no especificado';
  } else if (gender === 1) {
    gender = 'Femenino';
  } else if (gender === 2) {
    gender = 'Masculino';
  } else {
    gender = 'No binario';
  }

  if (biography === '') {
    biography = ' - ';
  }

  if (external_ids.instagram_id === null || external_ids.instagram_id === '') {
    external_ids.instagram_id = '';
  }

  if (external_ids.facebook_id === null || external_ids.facebook_id === '') {
    external_ids.facebook_id = '';
  }

  if (external_ids.twitter_id === null || external_ids.twitter_id === '') {
    external_ids.twitter_id = '';
  }

  let postUrlImage =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

  if (profile_path === null) {
    postUrlImage;
  } else {
    postUrlImage = `${baseUrlImage}${profile_path}`;
  }

  if (birthday === null) {
    birthday = '1998-05-21';
  }

  const formattedDate = format(new Date(birthday), "dd 'de' MMMM 'del' yyyy", {
    locale: es,
  });

  if (place_of_birth === null) {
    place_of_birth = ' - ';
  }

  return (
    <main className='max-w-screen xl:max-w-screen-xl xl:m-auto p-4 lg:pt-16 m-4'>
      <div className='flex gap-6 lg:gap-11 text-white flex-wrap lg:flex-nowrap justify-center'>
        <div className='overflow-hidden rounded-md h-[425px] w-[250px] block md:min-h-[510px] md:max-w-[340px] md:max-h-[510px] z-10 lg:min-w-[15rem]'>
          <Image
            src={`${postUrlImage}`}
            alt={name}
            height={500}
            width={500}
            className='rounded-md'
          ></Image>
          <div className='flex py-4 gap-8 justify-center'>
            <a
              href={`https://www.instagram.com/${external_ids.instagram_id}`}
              target='_blank'
            >
              <BsInstagram className='text-2xl hover:text-red-600 transition-colors duration-100' />
            </a>
            <a
              href={`https://www.twitter.com/${external_ids.twitter_id}`}
              target='_blank'
            >
              <BsTwitter className='text-2xl hover:text-blue-600 transition-colors duration-100' />
            </a>

            <a
              href={`https://www.facebook.com/${external_ids.facebook_id}`}
              target='_blank'
            >
              <GrFacebook className='text-2xl hover:text-blue-800 transition-colors duration-100' />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-2 xl:max-w-2xl 2xl:min-w-[48rem]'>
          <div>
            <h1 className='font-bold text-3xl'>{name}</h1>
          </div>
          <div>
            <h2 className='text-xl font-bold'>Biografía</h2>
            <p className='text-sm font-bold'>{biography}</p>
          </div>
          <div>
            <h2 className='text-xl font-bold'>Fecha de nacimiento</h2>
            <p className='font-bold text-sm'>{formattedDate}</p>
          </div>
          <div>
            <h2 className='text-xl font-bold'>Lugar de nacimiento</h2>
            <p className='font-bold text-sm'>{place_of_birth}</p>
          </div>
          <div>
            <h2 className='text-xl font-bold'>Género</h2>
            <p className='font-bold text-sm'>{gender}</p>
          </div>
        </div>
      </div>
      <Interpretaciones movie_credits={movie_credits} />
    </main>
  );
};

export default DetailActor;
