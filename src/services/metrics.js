const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'metrics';
const collectionName = 'metrics';
const client = new MongoClient(url);
async function getMetrics() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const metrics = await collection.find().toArray();
    return metrics;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.close();
  }
}
module.exports = { getMetrics };