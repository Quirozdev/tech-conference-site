import TracksFilter from "@/features/tracks/components/tracks-filter";
import { getTracks } from "@/features/tracks/services/get-tracks";

export default async function TracksFilterWrapper() {
  const tracks = await getTracks();

  return <TracksFilter tracks={tracks} />;
}
