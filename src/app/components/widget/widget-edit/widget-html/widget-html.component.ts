import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";
import {ActivatedRoute, Router} from "@angular/router";
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
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

    var newWidget = {
      _id: this.widgetId,
      widgetType : 'HTML',
      _page : this.pageId,
      text: this.text
    };

    this.widgetService.updateWidget(this.widgetId, newWidget).subscribe((widgets) => {
      this.widgets = widgets;
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });
  }

}
