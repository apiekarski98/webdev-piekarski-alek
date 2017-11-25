var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model("WidgetModel", widgetSchema);
var pageModel = require('./../page/page.model.server');

WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetsByPageId = findWidgetsByPageId;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

module.exports = WidgetModel;

function createWidget(widget) {
  return WidgetModel.create(widget);
}

function findWidgetsByPageId(pageId) {
  return WidgetModel.find({pageId: pageId});
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({_id: widgetId});
}
