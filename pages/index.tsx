import AddVideo from "@/components/add-video";
import VideoCard from "@/components/video-card";
import { VideosContext } from "@/state/videos";
import { useContext } from "react";

export default function Home() {
  const { videos, loading, addVideo, getVideos } = useContext(VideosContext);

  return (
    <div className="flex w-full justify-center">
      <div className="w-4/5">
        <h1 className="text-4xl font-bold my-8">Videos</h1>
        <AddVideo  />
        <div className="grid grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}  />
          ))}
        </div>
        <div className="h-4 mt-8 text-2xl">
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
}
