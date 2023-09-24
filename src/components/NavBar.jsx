'use client';
import Link from 'next/link';
import NavBarMobile from './NavBarMobile';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useParams } from 'next/navigation';

const NavBar = () => {
  const params = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav className='flex justify-between items-center p-6 bg-[#480048] rounded text-white'>
        <div className='text-white flex flex-grow justify-between items-center'>
          <Link href='/'>Inicio</Link>

          <NavBarMobile showMenu={showMenu} />
          <button onClick={toggleMenu} className='lg:hidden text-xl font-black'>
            {showMenu ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>
        <ul className='lg:flex gap-8 flex-wrap hidden'>
          {params.category === 'popular' ? (
            <li>
              <Link
                href='/peliculas/popular'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                Populares
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/peliculas/popular'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                Populares
              </Link>
            </li>
          )}
          {params.category === 'now_playing' ? (
            <li>
              <Link
                href='/peliculas/now_playing'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                En cartelera hoy
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/peliculas/now_playing'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                En cartelera hoy
              </Link>
            </li>
          )}
          {params.category === 'upcoming' ? (
            <li>
              <Link
                href='/peliculas/upcoming'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                Proximamente
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/peliculas/upcoming'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                Proximamente
              </Link>
            </li>
          )}
          {params.category === 'top_rated' ? (
            <li>
              <Link
                href='/peliculas/top_rated'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                Mejor valoradas
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/peliculas/top_rated'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                Mejor valoradas
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
