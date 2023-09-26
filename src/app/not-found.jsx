import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='flex h-[calc(100vh-17rem)] justify-center items-center bg-white'>
      <div className='flex justify-center items-center flex-col gap-8'>
        <Image
          src='/notFound.jpg'
          alt="Don't Movie"
          width={500}
          height={500}
        ></Image>
        <Link
          href='/'
          className='p-4 bg-red-500 rounded text-white font-medium text-lg'
        >
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
