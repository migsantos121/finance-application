const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
  username: {type: String, trim: true, required: true},
  password: {type: String, trim: true, required: true,

  validate: [function(password) {
    return password.length >=6;
  },
  'Password must be 6 letters or more',
],
},
});

mongoose.exports = mongoose.model('user', userSchema);
