var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  _id: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}],
  dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;