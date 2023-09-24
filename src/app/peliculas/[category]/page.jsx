import { DataCategory } from '@/app/fetch/FetchMovie';
import CardMovie from '@/components/CardMovie';

const PageMovie = async ({ params }) => {
  const { results } = await DataCategory(params);
  return <CardMovie results={results} params={params} />;
};

export default PageMovie;
