const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

function dbConnect (collectionName){
    
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

  // return client.db("tastyYummy").collection(collectionName);
  return client.db("happyShop").collection(collectionName);
}

export default dbConnect;

// lib/dbConnect.js
// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   throw new Error("❌ MONGODB_URI is not defined in .env.local");
// }

// // Cache the MongoClient across hot reloads in development
// let cachedClient = global._mongoClient;
// let cachedPromise = global._mongoClientPromise;

// if (!cachedClient) {
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//     tls: true, // ✅ important for Atlas
//   });

//   cachedClient = client;
//   cachedPromise = client.connect();

//   global._mongoClient = cachedClient;
//   global._mongoClientPromise = cachedPromise;
// }

// // 🔁 final export: returns connected collection
// export default async function dbConnect(collectionName) {
//   const client = await cachedPromise;
//   const db = client.db("tastyYummy"); // ✅ এখানে আপনার DB name
//   return db.collection(collectionName);
// }
