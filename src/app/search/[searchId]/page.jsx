import { FetchSearchMovie, baseUrlImage } from '../../fetch/FetchMovie';
import CardMovie from '@/components/Movie/CardMovie';

const PageSearch = async ({ params, searchParams }) => {
  const { query } = searchParams;

  const { results } = await FetchSearchMovie(query);
  const mapear = () => results.map((res) => res);

  return (
    <>
      {mapear().length === 0 ? null : (
        <div className='flex flex-wrap px-8 pb-8 pt-4 text-white gap-4 items-center'>
          <h3 className='font-bold text-2xl'>Restultados de:</h3>
          <span className='font-semibold text-xl py-2 px-4 bg-red-500 rounded'>
            {query}
          </span>
        </div>
      )}
      <CardMovie results={results} params={params} query={query} />
    </>
  );
};

export default PageSearch;
