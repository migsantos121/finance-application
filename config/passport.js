'use strict';

const passport = require ('passport');
const mongoose = require('mongoose');

module.exports = function() {
  let User = mongoose.model('User');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  User.findOne({
    _id: id,
  }, '-password -salt', function(err, user) {
    done(err, user);
  });


};
