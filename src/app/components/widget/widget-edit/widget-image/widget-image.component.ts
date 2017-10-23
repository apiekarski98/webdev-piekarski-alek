import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  websiteId: String;
  userId: String;
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
          this.pageId = params['pageId'];
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );

    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetType = this.widget['widgetType'];
    this.url = this.widget['url'];
    this.width = this.widget['width'];
  }

  update(url: String, width: String) {
    this.widgetService.updateWidget(this.widgetId, new Widget(this.widgetId, 'IMAGE', this.pageId, 0, width, 'undefined', url));
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId);
  }

}
