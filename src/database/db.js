import { MongoClient } from "mongodb";
import {collectionsExist} from './utils.js'


let _db;

const connectToDb = async (cb) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI, { useUnifiedTopology: true });
    // connecting to the mongoDb server
    await client.connect();
    //getting our database
    _db = client.db();
    
    //this function checks to if certain collections exist in the database and it creates the collection if it does not exist.
    collectionsExist(_db);
    return cb(null);
  } catch (error) {
    return cb(error);
  }
};

export const getCollections = () => {
    return {
        users:_db.collection('users'),
        orders: _db.collection('orders'),
        products:_db.collection('products')
    }
}

export const getDb = ()=> _db

export default connectToDb;
