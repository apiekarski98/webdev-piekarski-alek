var mongoose = require('mongoose');
var WebsiteSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  name: String,
  description: String,
  developerId: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
  dateCreated: Date
}, {collection: "website"});

module.exports = WebsiteSchema;