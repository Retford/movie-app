'use client';

import Link from 'next/link';

const NavBarMobile = (props) => {
  const { showMenu } = props;
  console.log(showMenu);

  return (
    <ul
      className={`flex gap-8 flex-wrap transition-all absolute left-0 w-1/2 top-10 ${
        showMenu ? 'hidden' : 'flex'
      }`}
    >
      <li>
        <Link
          href='/peliculas/popular'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          Populares
        </Link>
      </li>
      <li>
        <Link
          href='/peliculas/now_playing'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          En cartelera hoy
        </Link>
      </li>
      <li>
        <Link
          href='/peliculas/upcoming'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          Proximamente
        </Link>
      </li>
      <li>
        <Link
          href='/peliculas/top_rated'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          Mejor valoradas
        </Link>
      </li>
    </ul>
  );
};

export default NavBarMobile;
