import React from 'react';
import CardActor from './CardActor';

const RepartoPrincipal = ({ repartoPrincipal }) => {
  const { cast } = repartoPrincipal;
  return (
    <div className='text-white'>
      <h3>Reparto Principal</h3>
      <div className='w-full py-3 relative h-full slider-movie'>
        <ul className='relative scroll-smooth overflow-x-scroll gap-3 justify-start md:overflow-hidden block'>
          {cast.map((actor) => (
            <CardActor actor={actor} key={actor.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepartoPrincipal;
