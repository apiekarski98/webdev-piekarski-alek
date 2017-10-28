module.exports = function (app) {

  var WEBSITES = require("./website.mock.server");

  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.post("/api/user/:userId/website", createWebsite);
  app.put("/api/user/:userId/website/:websiteId", updateWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);

  function updateWebsite(req, res) {
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var website = req.body;
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES[i] = website;
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function deleteWebsite(req, res) {
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES.splice(i, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
  }

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    website.developerId = userId;
    WEBSITES.push(website);
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  function findWebsitesByUser(req, res) {
    var userId = req.params['userId'];
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  function getWebsitesForUserId(userId) {
    var websites = [];
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId) {
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}
