import session from 'express-session';
import MongoStore from 'connect-mongo';



export default function sessionMiddleware(req, res, next) {
  return session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    store: new MongoStore({
      mongoUrl: process.env.APP_DB_URI,
      collectionName: 'sessions'
    })
  })(req, res, next);
}