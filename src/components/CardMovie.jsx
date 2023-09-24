import Image from 'next/image';
import Link from 'next/link';

const CardMovie = ({ results, params }) => {
  console.log(results);
  return (
    <main className='max-w-screen grid place-content-center xl:grid-cols-3 grid-cols-1 xl:max-w-screen-2xl xl:m-auto'>
      {results.map(({ id, title, popularity, poster_path, release_date }) => (
        <div
          className='p-4 m-4 text-black rounded bg-[#c07244fb] flex justify-center items-center gap-4 xl:p-6 xl:m-6 overflow-hidden min-w-[150px] md:min-w-[210px]'
          key={id}
        >
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

            <h3 className='text-[#ffff00] font-bold text-xs xl:text-lg'>
              Popularidad: {popularity}
            </h3>
            <span className='text-xs xl:text-base text-gray-200'>
              {release_date}
            </span>
          </div>
          <div className='relative w-full min-h-[225px] overflow-hidden md:min-w-[210px]'>
            {params.category ? (
              <Link href={`/${id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  fill
                  className='rounded-md box-border block max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]'
                ></Image>
              </Link>
            ) : (
              <Link href={`/${id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  fill
                  className='rounded-md box-border block max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]'
                ></Image>
              </Link>
            )}
          </div>
        </div>
      ))}
    </main>
  );
};

export default CardMovie;
