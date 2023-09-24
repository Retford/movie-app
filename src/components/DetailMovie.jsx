import Image from 'next/image';

const DetailMovie = ({ detailMovie }) => {
  console.log({ detailMovie });
  const { title, poster_path, id, genres, runtime } = detailMovie;

  return (
    <main className='max-w-screen grid place-content-center xl:max-w-screen-2xl xl:m-auto p-4 m-4'>
      <div className='flex gap-11 text-white'>
        <div className='overflow-hidden rounded-md h-[300px] w-[250px] md:min-w-[340px] block md:min-h-[510px] md:max-w-[340px] md:max-h-[510px] z-10'>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={id}
            height={500}
            width={500}
          ></Image>
        </div>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            {genres.map((genero) => (
              <span key={genero.id}>{genero.name} - </span>
            ))}
            <span>
              {Math.floor(runtime / 60)}h {runtime % 60}m
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailMovie;
