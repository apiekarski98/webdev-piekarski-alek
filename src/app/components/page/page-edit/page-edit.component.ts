import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageId: String;
  page: Page;
  name: String;
  websiteId: String;
  description: String;
  userId: String;
  pages: Page[];

  constructor(private pageService: PageService,
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

    this.pageService.findPageById(this.pageId).subscribe((page) => {
      this.page = page;
    });
    this.pageService.findPagesByWebsiteId(this.websiteId).subscribe((pages) => {
      this.pages = pages;
    });
    this.websiteId = this.page['websiteId'];
    this.name = this.page['name'];
    this.description = this.page['description'];
  }

  update(name: String, description: String) {
    const page = new Page(this.pageId, name, this.websiteId, description);
    this.pageService.updatePage(this.pageId, page).subscribe((pages) => {
      this.pages = pages;
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    });
  }

  delete() {
    this.pageService.deletePage(this.pageId).subscribe((pages) => {
      this.pages = pages;
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    });
  }

}
