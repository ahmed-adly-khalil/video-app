import AddVideo from "@/components/add-video";
import VideoCard from "@/components/video-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  const getVideos = async () => {
    setLoading(true);
    const resp = await fetch("/api/videos");
    const data = await resp.json();

    setVideos(data);
    setLoading(false);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="w-4/5">
        <h1 className="text-4xl font-bold my-8">Videos</h1>
        <AddVideo refresh={getVideos} />
        <div className="grid grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} refresh={getVideos} />
          ))}
        </div>
        <div className="h-4 mt-8 text-2xl">
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
}
