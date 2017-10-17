import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageId: String;
  page: {};
  name: String;
  websiteId: String;
  description: String;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
        }
      );

    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page['name'];
    this.description = this.page['description'];
    this.websiteId = this.page['websiteId'];
  }

  update(name: String, description: String) {
    this.pageService.updatePage(this.pageId, new Page(this.pageId, name, this.websiteId, description));
  }

  delete() {
    this.pageService.deletePage(this.pageId);
  }

}
