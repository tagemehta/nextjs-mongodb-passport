import { MongoClient } from 'mongodb';
import UsersDAO from '../dao/usersDAO';
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 * https://github.com/vercel/next.js/pull/17666
 */
global.mongo = global.mongo || {};

export default async function database(req, res, next) {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.APP_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: {
        wtimeout: 2500
      }
    });
    await global.mongo.client.connect();
  }
  req.dbClient = global.mongo.client;
  req.db = global.mongo.client.db(process.env.APP_NS);
  return next();
}