'use client';
import Link from 'next/link';
import NavBarMobile from './NavBarMobile';
import { useState } from 'react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav className='flex justify-between items-center p-6 bg-[#480048] rounded text-white'>
        <div class='text-white flex flex-grow justify-between items-center'>
          <Link href='/'>Inicio</Link>

          <NavBarMobile showMenu={showMenu} />
          <button onClick={toggleMenu}>
            {showMenu ? 'cerrado' : 'abierto'}
          </button>
        </div>
        <ul className='lg:flex gap-8 flex-wrap hidden'>
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
      </nav>
    </header>
  );
};

export default NavBar;
