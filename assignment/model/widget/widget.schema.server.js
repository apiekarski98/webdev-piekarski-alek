var mongoose = require('mongoose');
var WidgetSchema = mongoose.Schema({
  _id: String,
  _page: {required: true, type: mongoose.Schema.ObjectId, ref: "PageModel"},
  type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT', 'TEXT'], required: true},
  pageId: String,
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: Date
}, {collection: 'widget'});

module.exports = WidgetSchema;
