module.exports = function (app) {
  var websiteModel = require("../model/website/website.model.server");

  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.post("/api/user/:userId/website", createWebsite);
  app.put("/api/user/:userId/website/:websiteId", updateWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website)
      .then(function (status) {
        res.send(status);
      });
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        res.json(website)
      });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (status) {
        res.send(status);
      });
  }

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    website.developerId = userId;
    delete website._id;
    websiteModel.createWebsite(website)
      .then(function (website) {
        websiteModel.findWebsitesByUser(userId)
          .then(function (websites) {
            res.json(websites);
          });
      });
  }

  function findWebsitesByUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findWebsitesByUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }
}
