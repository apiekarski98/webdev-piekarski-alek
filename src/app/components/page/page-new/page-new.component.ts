import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: String;
  websiteId: String;
  name: String;
  description: String;
  pages: Page[];

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );
    this.pageService.findPagesByWebsiteId(this.websiteId).subscribe((pages) => {
      this.pages = pages;
    });
  }

  create(name: String, description: String) {
    const page = new Page('', name, this.websiteId, description);
    this.pageService.createPage(this.websiteId, page).subscribe((pages) => {
      this.pages = pages;
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    });
  }

}
