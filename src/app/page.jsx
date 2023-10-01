import CardMovie from '@/components/Movie/CardMovie';
import { ApiMovie } from './fetch/FetchMovie';

const HomePage = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { results } = await ApiMovie();

  return <CardMovie results={results} params={params} />;
};

export default HomePage;
