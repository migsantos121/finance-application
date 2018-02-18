const passport = require('passport');
const LocalStratrgy = require('passport-local').Strategy();
const User = require('../model/user');
const debug = require('debug')('finance: local-auth-middleware');

module.exports = () => {
  debug('local-auth.js middleware');

  passport.use(new LocalStratrgy(function(username, password, done){

    User.findOne({
      username: username,
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, {
          message: 'Unknown user',
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          mesage: 'Invalid password',
        });
      }
      return done(null, user);
    });
  }

));
}; //end of module
