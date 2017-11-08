import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetHeaderComponent} from './widget-header/widget-header.component';
import {WidgetImageComponent} from "./widget-image/widget-image.component";
import {WidgetYoutubeComponent} from "./widget-youtube/widget-youtube.component";
import {Widget} from "../../../models/widget.model.client";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  @ViewChild(WidgetHeaderComponent)
  private widgetHeaderComponent: WidgetHeaderComponent;

  @ViewChild(WidgetImageComponent)
  private widgetImageComponent: WidgetImageComponent;

  @ViewChild(WidgetYoutubeComponent)
  private widgetYoutubeComponent: WidgetYoutubeComponent;

  websiteId: String;
  userId: String;
  widgetId: String;
  widgetType: String;
  pageId: String;
  widget: Widget;

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
    this.widgetService.findWidgetById(this.widgetId).subscribe((widget) => {
      this.widget = widget;
      this.widgetType = this.widget['widgetType'];
    });
  }

  update() {
    switch (this.widgetType) {
      case "HEADING":
        this.widgetHeaderComponent.update();
        break;
      case "IMAGE":
        this.widgetImageComponent.update();
        break;
      case "YOUTUBE":
        this.widgetYoutubeComponent.update();
        break;
    }
  }

}
