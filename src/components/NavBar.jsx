'use client';
import Link from 'next/link';
import NavBarMobile from './NavBarMobile';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { useParams } from 'next/navigation';

const NavBar = () => {
  const params = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='p-8'>
      <nav className='flex justify-between items-center p-6 bg-[#480048] rounded text-white'>
        <div className='text-white flex flex-grow justify-between items-center lg:flex-grow-0'>
          <Link href='/'>Inicio</Link>
          <div className='lg:hidden relative sm:w-4/5 w-[70%]'>
            <input
              type='text'
              className='text-black p-1 pl-3 outline-none rounded w-full'
              placeholder='Buscar película'
            />
            <div className='font-black text-2xl absolute -top-1 -right-[2.5px] rounded-e border-none z-30 p-1 px-2 bg-[#300030]'>
              <button>
                <BsSearch />
              </button>
            </div>
          </div>
          <NavBarMobile showMenu={showMenu} />
          <button onClick={toggleMenu} className='lg:hidden text-xl font-black'>
            {showMenu ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className='hidden lg:flex lg:w-1/4 xl:w-1/3 2xl:w-1/2 lg:items-center bg-[#300030] rounded hover:shadow-md hover:shadow-[#300030]'>
          <input
            type='text'
            className='text-black p-1 pl-3 outline-none rounded w-full'
            placeholder='Buscar película'
          />
          <div className='text-2xl font-black p-1 px-2'>
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
        <ul className='lg:flex gap-8 flex-wrap hidden'>
          {params.category === 'popular' ? (
            <li>
              <Link
                href='/pelicula/popular'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                Populares
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/pelicula/popular'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                Populares
              </Link>
            </li>
          )}
          {params.category === 'now_playing' ? (
            <li>
              <Link
                href='/pelicula/now_playing'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                En cartelera hoy
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/pelicula/now_playing'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                En cartelera hoy
              </Link>
            </li>
          )}
          {params.category === 'upcoming' ? (
            <li>
              <Link
                href='/pelicula/upcoming'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                Proximamente
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/pelicula/upcoming'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
              >
                Proximamente
              </Link>
            </li>
          )}
          {params.category === 'top_rated' ? (
            <li>
              <Link
                href='/pelicula/top_rated'
                className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300 bg-red-500 rounded'
              >
                Mejor valoradas
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href='/pelicula/top_rated'
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
