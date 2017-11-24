import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Response} from "@angular/http";

@Injectable()
export class WidgetService {

  api = {
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  constructor(private http: Http) {
  }

  createWidget(pageId: String, widget: any) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    widget._page =  pageId;
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

  updateWidget(pageId: String, widget: any) {
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
