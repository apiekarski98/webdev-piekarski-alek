module.exports = function (app) {
  var WIDGETS = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
      "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
      "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
      "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];

  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.post("/api/page/:pageId/widget", createWidget);
  app.put("/api/page/:pageId/widget/:widgetId", updateWidget);
  app.delete("/api/page/:pageId/widget/:widgetId", deleteWidget);

  function updateWidget(req, res) {
    var pageId = req.params['pageId'];
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS[i] = widget;
        var widget = getWidgetsForPageId(pageId);
        res.json(widget);
        return;
      }
    }
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    res.json(getWidgetById(widgetId));
  }

  function deleteWidget(req, res) {
    var pageId = req.params['pageId'];
    var widgetId = req.params['widgetId'];
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS.splice(i, 1);
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    WIDGETS.push(widget);
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function getWidgetsForPageId(userId) {
    var websites = [];
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWidgetById(widgetId) {
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        return WIDGETS[i];
      }
    }
  }
}
