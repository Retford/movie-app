'use client';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { AiFillStar } from 'react-icons/ai';
import YouTube from 'react-youtube';
import { useState } from 'react';
import RepartoPrincipal from './RepartoPrincipal';
import { baseUrlImage } from '@/app/fetch/FetchMovie';

const DetailMovie = ({ detailMovie, trailerMovie, repartoPrincipal }) => {
  const {
    title,
    poster_path,
    id,
    genres,
    runtime,
    tagline,
    overview,
    release_date,
    vote_average,
    spoken_languages,
    original_language,
    original_title,
  } = detailMovie;

  const { results } = trailerMovie;

  const trailer = results.find((video) => (video.name = 'Tráiler Oficial'));

  const formattedDate = format(
    new Date(release_date),
    "dd 'de' MMMM 'del' yyyy",
    { locale: es }
  );

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

  const [playerTrailer, setPlayerTrailer] = useState(false);

  const toggleTrailer = () => {
    setPlayerTrailer(!playerTrailer);
  };

  return (
    <main className='max-w-screen xl:max-w-screen-xl xl:m-auto p-4 lg:pt-16 m-4'>
      <div className='flex gap-6 lg:gap-11 text-white flex-wrap lg:flex-nowrap justify-center'>
        <div className='overflow-hidden rounded-md h-[300px] w-[250px] md:min-w-[340px] block md:min-h-[510px] md:max-w-[340px] md:max-h-[510px] z-10'>
          <Image
            src={`${baseUrlImage}${poster_path}`}
            alt={id}
            height={500}
            width={500}
          ></Image>
        </div>
        <div className='flex flex-col gap-2'>
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
          <p class='font-bold text-xl'>Vista general</p>
          <p className='text-ms max-w-3xl'>{overview}</p>
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
          <div>
            <button className='text-sm font-bold' onClick={toggleTrailer}>
              {playerTrailer ? (
                <p className='bg-[#c04848] rounded opacity-90 hover:opacity-100 text-white p-4 mb-3'>Cerrar Trailer</p>
              ) : (
                <p className='bg-[#f07241] rounded text-white opacity-80 hover:opacity-100 hover:scale-x-105 p-4 mb-3 px-6'>Ver Trailer</p>
              )}
            </button>
            {playerTrailer ? (
              trailer ? (
                <div className='w-[285px] h-auto overflow-auto lg:overflow-visible'>
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
    </main>
  );
};

export default DetailMovie;
