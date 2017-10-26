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
  websiteId: String;
  userId: String;
  widgetId: String;
  widgetType: String;
  pageId: String;
  widget: {};

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
          this.pageId = params['pageId'];
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );

    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetType = this.widget['widgetType'];
  }

  update() {
    this.widgetService.updateWidget(this.widgetId, this.widget);
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId);
  }
}
