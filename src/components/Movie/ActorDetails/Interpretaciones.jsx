'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import CardInterpretacion from './CardInterpretacion';

const Interpretaciones = ({ movie_credits }) => {
  const { cast } = movie_credits;
  return (
    <section className='text-white pt-16'>
      <h3 className='font-bold text-3xl'>Interpretaciones</h3>
      <Splide
        hasTrack={false}
        tag='section'
        options={{
          type: 'lool',
          perPage: 6,
          perMove: 1,
          loop: true,
          autoplay: true,
          updateOnMove: true,
          drag: true,
          interval: 3000,
          gap: '1rem',
          breakpoints: {
            412: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
            1280: {
              perPage: 4,
            },
            1536: {
              perPage: 5,
            },
          },
        }}
        aria-label='Actor'
      >
        <div className='custom-wrapper'>
          <div className='splide__progress'>
            <div className='splide__progress__bar' />
          </div>
          <SplideTrack>
            {cast.map((movieInterpretacion) => (
              <SplideSlide key={movieInterpretacion.id}>
                <CardInterpretacion movieInterpretacion={movieInterpretacion} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </section>
  );
};

export default Interpretaciones;
