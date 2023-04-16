// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../mongo";

import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Video[]>
) {
  const model: Video = req.body;

  const client: MongoClient = await clientPromise;
  const db = client.db();

  const resp = await db.collection("movies").find();
  const arr = await resp.toArray();

  const videos: Video[] = arr.map((item) => {
    return {
      id: item._id.toString(),
      title: item.title,
      description: item.description,
      likes: item.likes,
    };
  });

  res.status(200).json(videos);
}
