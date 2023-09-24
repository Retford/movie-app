import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-6 bg-gray-500 rounded'>
      <Link href='/'>
        <h1>Inicio</h1>
      </Link>
      <ul className='flex gap-16'>
        <li>
          <Link href='/peliculas/popular'>Populares</Link>
        </li>
        <li>
          <Link href='/peliculas/now_playing'>En cartelera hoy</Link>
        </li>
        <li>
          <Link href='/peliculas/upcoming'>Proximamente</Link>
        </li>
        <li>
          <Link href='/peliculas/top_rated'>Mejor valoradas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
