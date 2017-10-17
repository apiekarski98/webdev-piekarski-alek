import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  widgetId: String;
  widgetType: String;
  pageId: String;
  size: Number;
  text: String;
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
    this.text = this.widget['text'];
    this.size = this.widget['size'];
  }

  update(text: String, size: Number) {
    this.widgetService.updateWidget(this.widgetId, new Widget(this.widgetId, 'HEADING', this.pageId, size, 'undefined', text, 'undefined'));
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId);
  }
}
