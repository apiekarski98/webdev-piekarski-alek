import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') youtubeForm: NgForm;

  widgetId: String;
  pageId: String;
  userId: String;
  websiteId: String;
  widget: Widget;
  widgets: Widget[];
  url: String;
  width: String;
  errorFlag: boolean;
  error: String;

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
      this.url = widget.url;
      this.width = widget.width;
    });
    this.errorFlag = false;
    this.error = "Please enter a url";
  }

  update() {
    if (this.url === "") {
      this.errorFlag = true;
    } else {
      if (this.youtubeForm.value.url.length > 0) {
        this.url = this.youtubeForm.value.url;
      }
      if (this.youtubeForm.value.width.length > 0) {
        this.width = this.youtubeForm.value.width;
      }

      var newWidget = {
        _id: this.widgetId,
        widgetType: 'YOUTUBE',
        _page: this.pageId,
        width: this.width,
        url: this.url
      };

      this.widgetService.updateWidget(this.widgetId, newWidget).subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
    }
  }

  delete() {
    this.widgetService.deleteWidget(this.pageId, this.widgetId).subscribe((widgets) => {
      this.widgets = widgets;
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });
  }
}
