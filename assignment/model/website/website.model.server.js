var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', websiteSchema);
var userModel = require('./../user/user.model.server');

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesByUser = findWebsitesByUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function findWebsitesByUser(userId) {
  return WebsiteModel.find({developerId: userId});
}

function createWebsite(website) {
  var newWebsite = null;
  return WebsiteModel.create(website).then(function (website) {
    newWebsite = website;
    userModel.findUserById(newWebsite.developerId)
      .then(function (user) {
        user.websites.push(newWebsite);
        return user.save();
    });
  });
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.remove({_id: websiteId});
}
