import { MongoClient } from "mongodb";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const { mongoURI } = serverRuntimeConfig;

const options = {};

let client;
let clientPromise;

if (!mongoURI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// In production mode, it's best to not use a global variable.
client = new MongoClient(mongoURI, options);
clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
