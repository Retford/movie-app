import CardMovie from '@/components/CardMovie';
import { ApiMovie } from './fetch/FetchMovie';

const HomePage = async ({ params }) => {
  const { results } = await ApiMovie();

  return <CardMovie results={results} params={params} />;
};

export default HomePage;
