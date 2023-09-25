import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import CardSimilar from './CardSimilar';

const MovieSimilar = ({ similarMovie }) => {
  const { results, total_pages } = similarMovie;

  if (total_pages === 0) {
    return <></>;
  }

  return (
    <section className='text-white pt-16'>
      <h3 className='font-bold text-3xl'>Películas Similares</h3>
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
        aria-label='Movie Similar'
      >
        <div className='custom-wrapper'>
          <div className='splide__progress'>
            <div className='splide__progress__bar' />
          </div>
          <SplideTrack>
            {results.map((similarMovie) => (
              <SplideSlide key={similarMovie.id}>
                <CardSimilar similarMovie={similarMovie} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </section>
  );
};

export default MovieSimilar;
