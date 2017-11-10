module.exports = function (app) {
  var pageModel = require("../model/page/page.model.server");
  
  app.get("/api/website/:websiteId/page", findPagesByWebsiteId);
  app.get("/api/page/:pageId", findPageById);
  app.post("/api/website/:websiteId/page", createPage);
  app.put("/api/website/:websiteId/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var page = req.body;
    pageModel.updatePage(pageId, page)
      .then(function (status) {
        res.send(status);
      });
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId).then(function (page) {
      res.json(page);
    });
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    pageModel.deletePage(pageId)
      .then(function (status) {
        res.send(status);
      });
  }

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page.websiteId = websiteId;
    delete page._id;
    pageModel.createPage(page)
      .then(function (page) {
        pageModel.findPagesByWebsiteId(websiteId)
          .then(function (pages) {
            res.json(pages);
          });
      });
  }

  function findPagesByWebsiteId(req, res) {
    var websiteId = req.params['websiteId'];
    pageModel.findPagesByWebsiteId(websiteId)
      .then(function (pages) {
        res.json(pages);
      });
  }
}
