import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  widgetId: String;
  widgetType: String;
  pageId: String;
  width: String;
  url: String;
  widget: {};

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
        }
      );

    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetType = this.widget['widgetType'];
    this.pageId = this.widget['pageId'];
    this.url = this.widget['url'];
    this.width = this.widget['width'];
  }

  update(url: String, width: String) {
    this.widgetService.updateWidget(this.widgetId, new Widget(this.widgetId, 'YOUTUBE', this.pageId, 0, width, 'undefined', url));
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId);
  }
}
