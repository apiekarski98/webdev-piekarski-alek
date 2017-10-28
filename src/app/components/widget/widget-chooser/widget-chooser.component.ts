import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from "../../../services/widget.service.client";
import {Widget} from "../../../models/widget.model.client";

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  pageId: String;
  userId: String;
  websiteId: String;
  widgets = [{}];

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
        }
      );
  }

  create(widgetType: String) {
    const widget: Widget = new Widget("", widgetType, this.pageId, 0, "", "", "");
    this.widgetService.createWidget(this.pageId, widget).subscribe((widgets) => {
      this.widgets = widgets;
    })
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
  }
}
