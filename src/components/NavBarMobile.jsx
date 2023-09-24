import Link from 'next/link';

const NavBarMobile = (props) => {
  const { showMenu } = props;

  return (
    <ul
      className={`flex transition-all absolute w-1/2 top-8 rounded-e-lg z-50 bg-[#c04848] p-4 flex-col items-center justify-center gap-4 h-1/4 ${
        showMenu ? 'left-0' : '-left-full'
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
