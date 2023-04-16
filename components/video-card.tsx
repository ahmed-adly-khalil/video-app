export default function VideoCard(pros: { video: Video; refresh: () => void }) {
  const { video, refresh } = pros;

  const increaseLikes = async () => {
    await fetch(`/api/videos/like?id=${video.id}`);
    refresh();
  };

  return (
    <div className="border p-6 rounded-xl min-w-[300px]">
      <h3 className="mb-2 text-2xl">{video.title}</h3>
      <p className="text-md pb-4 pl-2 text-gray-500">{video.description}</p>

      <div className="grid grid-cols-10">
        <div className="col-span-2">likes</div>
        <div className="col-span-2">{video.likes}</div>

        <div className="col-span-6">
          <button
            onClick={increaseLikes}
            className="border pb-1 w-8 h-8 rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
