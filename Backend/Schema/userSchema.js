const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name: String,
     role: {
          type: String,
          enum: ['maintainer', 'user'],
          default: 'user'
     }
})

const User = mongoose.model('User', userSchema);
module.exports = { User };