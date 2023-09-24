import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { baseUrlImage } from '@/app/fetch/FetchMovie';

const CardMovie = ({ results, params }) => {
  console.log(results);
  return (
    <main className='max-w-screen grid place-content-center xl:grid-cols-5 grid-cols-1 xl:max-w-screen-2xl xl:m-auto'>
      {results.map(({ id, title, vote_average, poster_path, release_date }) => {
        const formattedDate = format(
          new Date(release_date),
          "dd 'de' MMMM 'del' yyyy",
          { locale: es }
        );
        return (
          <div
            className='p-4 m-4 text-black rounded-lg bg-[#601848] flex flex-col justify-center gap-4 xl:p-6 xl:m-6 overflow-hidden min-w-[150px] md:min-w-[210px]'
            key={id}
          >
            <div className='relative w-full min-h-[225px] overflow-hidden md:min-w-[210px]'>
              {params.category ? (
                <Link href={`/${id}`}>
                  <Image
                    src={`${baseUrlImage}${poster_path}`}
                    alt={title}
                    width={500}
                    height={500}
                    className='rounded-md box-border block max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]'
                  ></Image>
                </Link>
              ) : (
                <Link href={`/${id}`}>
                  <Image
                    src={`${baseUrlImage}${poster_path}`}
                    alt={title}
                    width={500}
                    height={500}
                    className='rounded-md box-border block max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]'
                  ></Image>
                </Link>
              )}
            </div>
            <div className='text-white'>
              {params.category ? (
                <Link href={`/${id}`}>
                  <h2 className='font-bold text-sm xl:text-xl'>{title}</h2>
                </Link>
              ) : (
                <Link href={`/${id}`}>
                  <h2 className='font-bold text-sm xl:text-xl'>{title}</h2>
                </Link>
              )}

              <h3 className='text-[#ffff00] font-bold text-xs xl:text-lg flex gap-1 items-center'>
                {vote_average}
                <AiFillStar />
              </h3>
              <span className='text-xs xl:text-base text-gray-200'>
                {formattedDate}
              </span>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default CardMovie;
