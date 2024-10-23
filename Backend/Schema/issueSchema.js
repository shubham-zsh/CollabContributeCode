const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
     title: { type: String, required: true },
     description: { type: String, required: true },
     createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
     },
     interestedUser: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
     }]
})

const Issue = mongoose.model('Issue', issueSchema);

module.exports = { Issue };