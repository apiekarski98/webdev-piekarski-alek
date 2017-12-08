import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  @ViewChild('f') textForm: NgForm;

  websiteId: String;
  userId: String;
  widgetId: String;
  pageId: String;
  widget: Widget;
  widgets: Widget[];
  text: String;
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
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );

    this.widgetService.findWidgetById(this.widgetId).subscribe((widget) => {
      this.widget = widget;
      this.text = widget.text;
    });
    this.errorFlag = false;
    this.error = "Please enter text";
  }

  update() {
    if (this.text === "") {
      this.errorFlag = true;
    } else {
      if (this.textForm.value.text.length > 0) {
        this.text = this.textForm.value.text;
      }

      var newWidget = {
        _id: this.widgetId,
        widgetType: 'TEXT',
        _page: this.pageId,
        text: this.text
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
