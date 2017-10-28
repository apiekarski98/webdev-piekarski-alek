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
  userId: String;
  pages = [{}];

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
        }
      );

    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page['name'];
    this.description = this.page['description'];
    this.websiteId = this.page['websiteId'];
    this.pageService.findPagesByWebsiteId(this.websiteId);
  }

  update(name: String, description: String) {
    const page = new Page(this.pageId, name, this.websiteId, description);
    this.pageService.updatePage(this.pageId, page).subscribe((pages) => {
      this.pages = pages;
    });
  }

  delete() {
    this.pageService.deletePage(this.pageId).subscribe((pages) => {
      this.pages = pages;
    });
  }

}
