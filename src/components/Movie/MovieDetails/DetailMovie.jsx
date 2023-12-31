'use client';

import { AiFillStar } from 'react-icons/ai';
import YouTube from 'react-youtube';
import { useState } from 'react';
import RepartoPrincipal from './RepartoPrincipal';
import { baseUrlImage } from '@/app/fetch/FetchMovie';
import RecomendationsMovie from './RecomendationsMovie';
import NotFound from '@/app/not-found';
import MovieSimilar from './MovieSimilar';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';

const DetailMovie = ({
  detailMovie,
  trailerMovie,
  repartoPrincipal,
  recommendationsMovie,
  similarMovie,
}) => {
  const {
    title,
    id,
    genres,
    runtime,
    tagline,
    overview,
    vote_average,
    spoken_languages,
    original_language,
    original_title,
  } = detailMovie;

  let { poster_path, release_date } = detailMovie;

  const [playerTrailer, setPlayerTrailer] = useState(false);

  const { results } = trailerMovie;

  if (!results) {
    return <NotFound />;
  }

  const trailer = results.find((video) => (video.name = 'Tráiler Oficial'));

  function transformarIdioma(idiomaAbreviado) {
    const idiomas = {
      en: 'Inglés',
      cn: 'Chino',
      es: 'Español',
      ja: 'Japones',
    };

    if (idiomaAbreviado in idiomas) {
      return idiomas[idiomaAbreviado];
    } else {
      return idiomaAbreviado;
    }
  }

  const respuestaAPI = original_language;
  const idiomaMostrado = transformarIdioma(respuestaAPI);

  const toggleTrailer = () => {
    setPlayerTrailer(!playerTrailer);
  };

  let postUrlImage =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

  if (poster_path === null) {
    postUrlImage;
  } else {
    postUrlImage = `${baseUrlImage}${poster_path}`;
  }

  if (
    release_date === null ||
    release_date === '' ||
    release_date === undefined
  ) {
    release_date = '1998-05-21';
  }

  const formattedDate = format(
    new Date(release_date),
    "dd 'de' MMMM 'del' yyyy",
    { locale: es }
  );

  return (
    <main className='max-w-screen xl:max-w-screen-xl xl:m-auto p-4 lg:pt-16 m-4 min-h-[76.2vh]'>
      <div className='flex gap-6 lg:gap-11 text-white flex-wrap lg:flex-nowrap justify-center'>
        <div className='overflow-hidden rounded-md h-[300px] w-[250px] md:min-w-[340px] block md:min-h-[510px] md:max-w-[340px] md:max-h-[510px] z-10'>
          <img src={`${postUrlImage}`} alt={title} height={500} width={500} />
        </div>
        <div className='flex flex-col gap-2 xl:max-w-2xl 2xl:min-w-[48rem]'>
          <div>
            <h1 className='font-bold text-3xl'>{title}</h1>
          </div>
          <div>
            {genres.map((genero) => (
              <span
                key={genero.id}
                className='text-ms font-bold hover:opacity-80'
              >
                {genero.name} -{' '}
              </span>
            ))}
            <span className='text-ms font-bold hover:opacity-80'>
              {' '}
              {Math.floor(runtime / 60)}h {runtime % 60}m
            </span>
          </div>
          <p className='font-bold text-sm opacity-75'>{tagline}</p>
          <p className='font-bold text-xl'>Vista general</p>
          <p className='text-ms'>{overview}</p>
          <div className='flex gap-2'>
            <p className='font-bold'>Estreno: </p>
            <p className='text-ms'>{formattedDate}</p>
          </div>
          <div className='text-[#ffff00] font-bold text-xs xl:text-xl'>
            <span className='flex gap-1 items-center'>
              {Math.round(vote_average * 10) / 10}
              <AiFillStar />
            </span>
          </div>
          <div className='flex gap-3'>
            <div class='text-ms font-bold'>Idioma original: </div>
            <span>{idiomaMostrado}</span>
          </div>
          <div className='flex gap-3'>
            <div class='text-ms font-bold flex-wrap'>
              Idiomas disponibles:{' '}
              {spoken_languages.map((language) => (
                <span className='font-normal' key={language.english_name}>
                  {language.name}{' '}
                </span>
              ))}
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='text-sm font-bold'>Título original: </div>
            <span className='text-ms'>{original_title}</span>
          </div>
          <div className='max-w-xs'>
            <button className='text-sm font-bold' onClick={toggleTrailer}>
              {playerTrailer ? (
                <p className='bg-[#c04848] rounded opacity-90 hover:opacity-100 text-white p-4 mb-3'>
                  Cerrar Trailer
                </p>
              ) : (
                <p className='bg-[#f07241] rounded text-white opacity-80 hover:opacity-100 hover:scale-x-105 p-4 mb-3 px-6'>
                  Ver Trailer
                </p>
              )}
            </button>
            {playerTrailer ? (
              trailer ? (
                <div className='w-[311px] sm:w-[576px] tablet:w-[511px] md:w-[704px] lg:w-[572px] xl:w-full h-auto overflow-auto xl:overflow-visible'>
                  <YouTube videoId={trailer.key} />
                </div>
              ) : (
                <h3 className='p-4 bg-white text-black text-center font-black m-1 rounded animate-pulse'>
                  El trailer no está disponible
                </h3>
              )
            ) : null}
          </div>
        </div>
      </div>
      <RepartoPrincipal repartoPrincipal={repartoPrincipal} />
      <RecomendationsMovie recommendationsMovie={recommendationsMovie} />
      <MovieSimilar similarMovie={similarMovie} />
    </main>
  );
};

export default DetailMovie;
