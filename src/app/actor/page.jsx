import CardActorPopular from '@/components/Movie/Actor/CardActorPopular';
import { FetchActor } from '../fetch/FetchMovie';

const PageActor = async () => {
  const { results } = await FetchActor();
  return <CardActorPopular results={results} />;
};

export default PageActor;
