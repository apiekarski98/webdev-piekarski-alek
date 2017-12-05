import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') headerForm: NgForm;

  websiteId: String;
  userId: String;
  widgetId: String;
  pageId: String;
  size: Number;
  text: String;
  widget: any;
  widgets: Widget[];

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
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
        }
      );

    this.widgetService.findWidgetById(this.widgetId).subscribe((widget) => {
      this.widget = widget;
      this.size = widget['size'];
      this.text = widget['text'];
    });
  }

  update() {
    if (this.headerForm.value.text.length > 0) {
      this.text = this.headerForm.value.text;
    }
    if (this.headerForm.value.size.length > 0) {
      this.size = this.headerForm.value.size;
    }

    var newWidget = {
      _id: this.widgetId,
      widgetType : 'HEADING',
      _page : this.pageId,
      size: this.size,
      text: this.text
    };
    this.widgetService.updateWidget(this.pageId, newWidget).subscribe((widgets) => {
      this.widgets = widgets;
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });
  }

  delete() {
    this.widgetService.deleteWidget(this.pageId, this.widgetId).subscribe((widgets) => {
      this.widgets = widgets;
    });
  }
}
