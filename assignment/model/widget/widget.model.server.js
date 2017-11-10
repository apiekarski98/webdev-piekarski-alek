var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', widgetSchema);
var pageModel = require('./../page/page.model.server');

WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetsByPageId = findWidgetsByPageId;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidget(widget) {
  var newWidget = null;
  return WidgetModel.create(widget)
    .then(function (widget) {
      newWidget = widget;
      pageModel.findPageById(widget.pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        });
    });
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

function reorderWidget(pageId, start, end) {
  return pageModel.findPageById(pageId).then((page) => {
    return pageModel.updatePage(pageId, {widgets: moveWidgets(page.widgets, start, end)});
  });
}

function moveWidgets(widgets, start, end) {
  if (widgets.length < end) {
    let num = end - widgets.length;
    while ((num--) + 1) {
      widgets.push(undefined);
    }
  }
  widgets.splice(end, 0, widgets.splice(start, 1)[0]);
  return widgets;
}
