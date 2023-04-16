// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../mongo";

import { MongoClient, ObjectId, UpdateResult } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UpdateResult>
) {
  const model: Video = req.body;

  const client: MongoClient = await clientPromise;
  const db = client.db();

  const id = req.query.id as string;

  const status = await db
    .collection("movies")
    .updateOne({ _id: new ObjectId(id) }, { $inc: { likes: 1 } });

  res.status(200).json(status);
}
