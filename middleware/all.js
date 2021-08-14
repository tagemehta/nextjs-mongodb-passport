import nc from 'next-connect';
import passport from './passport';
import database from './database';
import sessionMiddleware from './session';

const all = nc();

all.use(database).use(sessionMiddleware).use(passport.initialize()).use(passport.session());

export default all;