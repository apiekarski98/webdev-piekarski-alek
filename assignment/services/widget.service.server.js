module.exports = function (app) {
  var widgetModel = require("../model/widget/widget.model.server");
  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.get("/api/page/:pageId/widget", findWidgetsByPageId);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.post("/api/page/:pageId/widget", createWidget);
  app.put("/api/page/:pageId/widget/:widgetId", updateWidget);
  app.delete("/api/page/:pageId/widget/:widgetId", deleteWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

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
    var widget = req.body;
    widgetModel.createWidget(widget)
      .then(function (widget) {
        res.json(widget);
      }, function (error) {
        res.sendStatus(400).send(error);
      });

  }

  function findWidgetsByPageId(req, res) {
    var pageId = req.params['pageId'];
    widgetModel.findWidgetsByPageId(pageId)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var widget = findWidgetById(widgetId);
    widget.url = '/uploads/'+filename;

    var callbackUrl   = "/assignment/#/user/" + userId + "/website/" + websiteId + '/widget/' + widgetId;

    res.redirect(callbackUrl);
  }

}
