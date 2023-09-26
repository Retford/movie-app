import { DataCategory } from '@/app/fetch/FetchMovie';
import CardMovie from '@/components/Movie/CardMovie';

const PageMovieCategory = async ({ params }) => {
  const { results } = await DataCategory(params);
  return <CardMovie results={results} params={params} />;
};

export default PageMovieCategory;
