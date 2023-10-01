import { baseUrlImage } from '@/app/fetch/FetchMovie';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

const CardActorPopular = ({ results }) => {
  return (
    <main className='max-w-screen grid place-content-center lg:grid-cols-4 2xl:grid-cols-5 tablet:grid-cols-3 grid-cols-2 xl:max-w-screen-2xl xl:m-auto gap-3 p-4 lg:gap-0 lg:p-0 min-h-[76.2vh]'>
      {results.map(({ id, name, popularity, profile_path }) => {
        let pathUrlImage =
          'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
        if (profile_path === null) {
          pathUrlImage;
        } else {
          pathUrlImage = `${baseUrlImage}${profile_path}`;
        }

        return (
          <div
            className='p-3 lg:m-3 text-black rounded-lg bg-[#601848] flex flex-col justify-center gap-4 xl:p-6 xl:m-6 overflow-hidden min-w-[150px] md:min-w-[210px] shadow-lg shadow-black'
            key={id}
          >
            <div className='relative w-full min-h-[225px] overflow-hidden md:min-w-[210px]'>
              <Link href={`/actor/${id}`}>
                <img
                  src={`${pathUrlImage}`}
                  alt={name}
                  width={500}
                  height={500}
                  className='rounded-md box-border block max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]'
                />
              </Link>
            </div>
            <div className='text-white'>
              <Link href={`/actor/${id}`}>
                <h2 className='font-bold text-sm xl:text-xl'>{name}</h2>
              </Link>

              <h3 className='text-[#ffff00] font-bold text-xs xl:text-lg flex gap-1 items-center'>
                {popularity}
                <AiFillStar />
              </h3>
              {/* <span className='text-xs xl:text-base text-gray-200'>
                {formattedDate}
              </span> */}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default CardActorPopular;
