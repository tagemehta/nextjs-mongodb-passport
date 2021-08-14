import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local'
import UsersDAO from '../dao/usersDAO';
import {compareHash} from '../service/encrypt.service';
passport.use(new LocalStrategy(
  {usernameField: 'email', passwordField: 'password', passReqToCallback: true},
  async function(req, email, password, done) {
    let { error, result } = await UsersDAO.findByEmail(req.db, email);

    if (error) { return done(error)};

    if (!result) {return done(null, false)};
    
    let compareResult = await compareHash(password, result.hash)

    if (!(compareResult.result)) {return done(null, false)};

    return done(null, result);
  }
));

passport.serializeUser(function(req, user, done) {
  done(null, user._id);
});

passport.deserializeUser(async (req, id, done) => {
  const {error, result} = await UsersDAO.findById(req.db, id);
    if(error){
        done(error, false);
    } else {
        done(null, result);
}});

    export default passport;