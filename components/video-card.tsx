import { VideosContext } from "@/state/videos";
import { useContext } from "react";

export default function VideoCard(pros: { video: Video }) {
  const { video } = pros;

  const { increaseLikes } = useContext(VideosContext);

  return (
    <div className="border p-6 rounded-xl min-w-[300px]">
      <h3 className="mb-2 text-2xl">{video.title}</h3>
      <p className="text-md pb-4 pl-2 text-gray-500">{video.description}</p>

      <div className="grid grid-cols-10">
        <div className="col-span-2">likes</div>
        <div className="col-span-2">{video.likes}</div>

        <div className="col-span-6">
          <button
            onClick={() => {
              increaseLikes(video.id as string);
            }}
            className="border pb-1 w-8 h-8 rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
