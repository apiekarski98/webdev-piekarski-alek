import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  websiteId: String;
  userId: String;
  widgetId: String;
  widgetType: String;
  pageId: String;
  size: Number;
  text: String;
  widget: Widget;
  widgets = [{}];

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
          this.pageId = params['pageId'];
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
        }
      );

    this.widgetService.findWidgetById(this.widgetId);
    this.widgetType = this.widget['widgetType'];
  }

  update() {
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((widgets) => {
      this.widgets = widgets;
    });
  }

  delete() {
    this.widgetService.deleteWidget(this.pageId, this.widgetId).subscribe((widgets) => {
      this.widgets = widgets;
    });
  }
}
