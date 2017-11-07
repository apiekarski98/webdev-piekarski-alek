import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Response} from "@angular/http";

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

  constructor(private http: Http) {
  }

  createWidget(pageId: String, widget: Widget) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    widget.pageId = pageId;
    var randomId = Math.floor(Math.random() * 1000000);
    widget._id = randomId.toString();
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetsByPageId(pageId: String) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetById(widgetId: String) {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWidget(pageId: String, widget: Widget) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget/' + widget._id;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWidget(pageId: String, widgetId: String) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
