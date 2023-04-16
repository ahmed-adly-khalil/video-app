// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
  
  // eslint-disable-next-line
import clientPromise from "../mongo";

import { InsertOneResult, MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<InsertOneResult>
) {
  const model: Video = req.body;
  
  // eslint-disable-next-line
  const client: MongoClient = await clientPromise;
  const db = client.db();

  const status = await db.collection("movies").insertOne(model);

  res.status(200).json(status);
}
