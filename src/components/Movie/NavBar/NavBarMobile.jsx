import Link from 'next/link';

const NavBarMobile = (props) => {
  const { showMenu } = props;

  return (
    <ul
      className={`flex transition-all absolute w-1/2 tablet:w-1/3 md:w-1/4 top-full rounded-e-lg z-50 bg-[#c04848] p-4 flex-col gap-8 pt-8 h-[calc(100vh-108px)] ${
        showMenu ? 'left-0' : '-left-full'
      }`}
    >
      <li>
        <Link
          href='/pelicula/popular'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          Populares
        </Link>
      </li>
      <li>
        <Link
          href='/pelicula/now_playing'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          En cartelera hoy
        </Link>
      </li>
      <li>
        <Link
          href='/pelicula/upcoming'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          Proximamente
        </Link>
      </li>
      <li>
        <Link
          href='/pelicula/top_rated'
          className='hover:text-black hover:bg-white py-2 px-4 hover:rounded hover:transition-colors transition-colors hover:duration-300'
        >
          Mejor valoradas
        </Link>
      </li>
    </ul>
  );
};

export default NavBarMobile;
