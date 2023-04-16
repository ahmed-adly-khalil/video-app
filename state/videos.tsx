import { createContext, useEffect, useState } from "react";

function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  const getVideos = async () => {
    setLoading(true);
    const resp = await fetch("/api/videos");
    const data = await resp.json();

    setVideos(data);
    setLoading(false);
  };

  const addVideo = async (video: Video) => {
    // todo: add validation
    const resp = await fetch("/api/videos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    });
    return await resp.json();
  };

  const increaseLikes = async (id:string) => {
    await fetch(`/api/videos/like?id=${id}`);
    getVideos();
  };

  useEffect(() => {
    getVideos();
  }, []);

  return {
    videos,
    getVideos,
    loading,
    addVideo,
    increaseLikes,
  };
}

export let VideosContext = createContext<ReturnType<typeof useVideos>>({
  videos: [],
  loading: false,
  addVideo: async () => {},
  getVideos: async () => {},
  increaseLikes: async () => {},
});
export function VideosProvider(props: { children: React.ReactNode }) {
  let value = useVideos();
  let { children } = props;

  return (
    <VideosContext.Provider value={value}>{children}</VideosContext.Provider>
  );
}
