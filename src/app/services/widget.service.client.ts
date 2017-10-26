import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  widgets: Widget[] = [
    new Widget('123', 'HEADING', '321', 2, 'undefined', 'GIZMODO', 'undefined'),
    new Widget('234', 'HEADING', '321', 4, 'undefined', 'Lorem ipsum', 'undefined'),
    new Widget('345', 'IMAGE', '321', 0, '100%', 'undefined', 'http://lorempixel.com/400/200/'),
    new Widget('456', 'HTML', '321', 0, 'undefined', '<p>Lorem ipsum</p>', 'undefined'),
    new Widget('567', 'HEADING', '321', 4, 'undefined', 'Lorem ipsum', 'undefined'),
    new Widget('678', 'YOUTUBE', '321', 0, '100%', 'undefined', 'https://www.youtube.com/embed/AM2Ivdi9c4E'),
    new Widget('789', 'HTML', '321', 0, 'undefined', '<p>Lorem ipsum</p>', 'undefined')
  ];

  api = {
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  createWidget(pageId: String, widget: any) {
    widget.pageId = pageId;
    var randomId = Math.floor(Math.random() * 1000000);
    widget._id = randomId.toString();
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: String) {
    const widgetsByPage = [];
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i].pageId === pageId) {
        widgetsByPage.push(this.widgets[i]);
      }
    }
    return widgetsByPage;
  }

  findWidgetById(widgetId: String) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        return this.widgets[i];
      }
    }
  }

  updateWidget(widgetId: String, widget: any) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets[i] = widget;
      }
    }
  }

  deleteWidget(widgetId: String) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        return this.widgets.splice(i, 1);
      }
    }
  }
}
