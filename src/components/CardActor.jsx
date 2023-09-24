import Image from 'next/image';
import React from 'react';

const CardActor = ({ actor }) => {
  const { profile_path, name, character } = actor;
  return (
    <li className='inline-block rounded-xl overflow-hidden min-w-[150px]  md:max-w-[180px] md:min-w-[180px]'>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        width={500}
        height={500}
        alt={name}
        className='block w-full min-h-[200px] min-w-[150px] object-cover md:min-h-[200px] md:max-h-[250px] '
      ></Image>
      <div>{character}</div>
      <span className='text-ms font-bold'>{name}</span>
    </li>
  );
};

export default CardActor;
