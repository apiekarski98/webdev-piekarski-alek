module.exports = function (app) {
  var widgetModel = require("../model/page/page.model.server");
  
  app.get("/api/page/:pageId/widget", findWidgetsByPageId);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.post("/api/page/:pageId/widget", createWidget);
  app.put("/api/page/:pageId/widget/:widgetId", updateWidget);
  app.delete("/api/page/:pageId/widget/:widgetId", deleteWidget);

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    widgetModel.updateWidget(widgetId, widget)
      .then(function (status) {
        res.send(status);
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function (status) {
        res.send(status);
      });
  }

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    delete widget._id;
    widgetModel.createWidget(widget)
      .then(function (widget) {
        widgetModel.findWidgetsByPageId(pageId)
          .then(function (widgets) {
            res.json(widgets);
          });
      });
  }

  function findWidgetsByPageId(req, res) {
    var pageId = req.params['pageId'];
    widgetModel.findPagesByWebsiteId(pageId)
      .then(function (widgets) {
        res.json(widgets);
      });
  }
}
