const mongoose = require('mongoose');

const BlacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
   
    expires: 24 * 60 * 60, 
  },
});

module.exports = mongoose.model('BlacklistToken', BlacklistTokenSchema);
