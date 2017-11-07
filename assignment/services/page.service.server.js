module.exports = function (app) {

  var PAGES = [
    {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
  ];

  app.get("/api/website/:websiteId/page", findPagesByWebsiteId);
  app.get("/api/page/:pageId", findPageById);
  app.post("/api/website/:websiteId/page", createPage);
  app.put("/api/website/:websiteId/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function updatePage(req, res) {
    var websiteId = req.params['websiteId'];
    var pageId = req.params['pageId'];
    var page = req.body;
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        PAGES[i] = page;
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        PAGES.splice(i, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
  }

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page.websiteId = websiteId;
    PAGES.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function findPagesByWebsiteId(req, res) {
    var websiteId = req.params['websiteId'];
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function getPagesForWebsiteId(websiteId) {
    var pages = [];
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].websiteId === websiteId) {
        pages.push(PAGES[i]);
      }
    }
    return pages;
  }

  function getPageById(pageId) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        return PAGES[i];
      }
    }
  }
}
