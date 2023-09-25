import { FetchDetailActor } from '@/app/fetch/FetchMovie';
import DetailActor from '@/components/ActorDetails/DetailActor';

const page = async ({ params }) => {
  const detailActor = await FetchDetailActor(params);

  return <DetailActor detailActor={detailActor} />;
};

export default page;
