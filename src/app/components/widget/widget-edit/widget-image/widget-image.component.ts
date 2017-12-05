import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('f') imageForm: NgForm;

  websiteId: String;
  userId: String;
  widgetId: String;
  pageId: String;
  widget: Widget;
  widgets: Widget[];
  url: String;
  width: String;

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
      this.url = widget.url;
      this.width = widget.width;
    });
  }

  update() {
    if (this.imageForm.value.url.length > 0) {
      this.url = this.imageForm.value.url;
    }
    if (this.imageForm.value.width.length > 0) {
      this.width = this.imageForm.value.width;
    }

    var newWidget = {
      _id: this.widgetId,
      widgetType : 'IMAGE',
      _page : this.pageId,
      url: this.url,
      width: this.width
    };

    this.widgetService.updateWidget(this.widgetId, newWidget).subscribe((widgets) => {
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
