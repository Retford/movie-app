import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const LoadingCard = ({ results, params, query }) => {
  if (results.length === 0) {
    return (
      <div className='h-[calc(100vh-14rem)] xl:h-[calc(100vh-5rem)] flex flex-col justify-center items-center xl:text-xl gap-8 bg-white'>
        <img src='/dontSearch.jpg' alt="Don't Movie" width={500} height={500} />
        <div className='text-black font-black flex flex-wrap justify-center gap-4'>
          <span>No hay resultados de Búsqueda para: </span>
          <span className='bg-[#CE0000] text-white p-1 px-2 rounded'>
            {query}
          </span>
        </div>
        <Link
          href='/'
          className='text-center font-medium bg-red-600 p-5 rounded text-white'
        >
          Volver Al Inicio
        </Link>
      </div>
    );
  }
  return (
    <main className='max-w-screen grid place-content-center lg:grid-cols-4 2xl:grid-cols-5 tablet:grid-cols-3 grid-cols-2 xl:max-w-screen-2xl xl:m-auto gap-3 p-4 lg:gap-0 lg:p-0 min-h-[76.2vh]'>
      {results.map(({ id, title, vote_average, release_date }) => {
        if (
          release_date === null ||
          release_date === undefined ||
          release_date === ''
        ) {
          release_date = '1998-05-21';
        }

        let pathUrlImage =
          'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

        const formattedDate = format(
          new Date(release_date),
          "dd 'de' MMMM 'del' yyyy",
          { locale: es }
        );

        return (
          <div
            className='p-3 lg:m-3 text-black rounded-lg bg-[#601848] flex flex-col justify-center gap-4 xl:p-6 xl:m-6 overflow-hidden min-w-[150px] md:min-w-[210px] shadow-lg shadow-black'
            key={id}
          >
            <div className='relative w-full min-h-[225px] overflow-hidden md:min-w-[210px]'>
              <img
                src={`${pathUrlImage}`}
                alt={title}
                width={500}
                height={500}
                className='rounded-md box-border block max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]'
              />
            </div>
            <div className='text-white'>
              <h2 className='font-bold text-sm xl:text-xl'> </h2>

              <h3 className='text-[#ffff00] font-bold text-xs xl:text-lg flex gap-1 items-center'></h3>
              <span className='text-xs xl:text-base text-gray-200'></span>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default LoadingCard;
