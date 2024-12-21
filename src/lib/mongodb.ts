import { MongoClient, MongoClientOptions } from "mongodb";

declare global {
  // Extend the global interface to include the MongoClient promise for development
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Ensure MongoDB URI is provided
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

// Create a single MongoClient instance
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to preserve the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Create a new client for production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
