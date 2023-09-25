import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import CardRecomendation from './CardRecomendation';

const RecomendationsMovie = ({ recommendationsMovie }) => {
  const { results, total_pages } = recommendationsMovie;

  if (total_pages === 0) {
    return <></>;
  }

  return (
    <section className='text-white pt-16'>
      <h3 className='font-bold text-3xl'>Películas Recomendadas</h3>
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
            {results.map((movieRecomendation) => (
              <SplideSlide key={movieRecomendation.id}>
                <CardRecomendation movieRecomendation={movieRecomendation} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </section>
  );
};

export default RecomendationsMovie;
