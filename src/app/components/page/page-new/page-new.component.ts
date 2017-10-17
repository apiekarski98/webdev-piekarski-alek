import { Component, OnInit } from '@angular/core';
import {PageService} from "../../../services/page.service.client";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../../../models/page.model.client";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  websiteId: String;
  name: String;
  description: String;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
        }
      );
  }

  create(name: String, description: String) {
    this.pageService.createPage(this.websiteId, new Page('', name, this.websiteId, description));
  }

}
