import { ApiMovie } from './fetch/FetchMovie';
import LoadingCard from '@/components/Movie/LodingCard';

const LoadingPage = async ({ params }) => {
  const { results } = await ApiMovie();

  return <LoadingCard results={results} params={params} />;
};

export default LoadingPage;
