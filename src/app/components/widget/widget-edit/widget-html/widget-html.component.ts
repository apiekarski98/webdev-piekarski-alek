import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  @ViewChild('f') htmlForm: NgForm;

  websiteId: String;
  userId: String;
  widgetId: String;
  pageId: String;
  widget: Widget;
  widgets: Widget[];
  text: String;

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

    this.widgetService.findWidgetById(this.widgetId).subscribe((widget) => {
      this.widget = widget;
      this.text = widget.text;
    });
  }

  update() {
    if (this.htmlForm.value.text.length > 0) {
      this.text = this.htmlForm.value.text;
    }
    const newWidget = new Widget(this.widgetId, 'HTML', this.pageId, 0, '', this.text, 'undefined');
    this.widgetService.updateWidget(this.widgetId, newWidget).subscribe((widgets) => {
      this.widgets = widgets;
    });
  }

}