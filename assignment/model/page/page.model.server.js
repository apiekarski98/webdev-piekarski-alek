var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', pageSchema);
var websiteModel = require('./../website/website.model.server');

PageModel.createPage = createPage;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
PageModel.findPagesByWebsiteId = findPagesByWebsiteId;
PageModel.findPageById = findPageById;

module.exports = PageModel;

function findPagesByWebsiteId(websiteId) {
  return PageModel.find({websiteId: websiteId});
}

function createPage(page) {
  var newPage = null;
  return PageModel.create(newPage).then(function (page) {
    newPage = page;
    websiteModel.findWebsiteById(page.websiteId)
      .then(function (website) {
        website.pages.push(newPage);
        return website.save();
      });
  });
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.remove({_id: pageId});
}
