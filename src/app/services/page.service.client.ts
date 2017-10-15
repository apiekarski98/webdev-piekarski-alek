import { Page } from '../models/page.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  pages: Page[] = [
    new Page('321', 'Post 1', '456'),
    new Page('432', 'Post 2', '456'),
    new Page('543', 'Post 3', '456')
  ];

  api = {
    'createPage': this.createPage,
    'findPagesByWebsiteId': this.findPagesByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };

  createPage(websiteId: String, page: any) {
    page._id = websiteId;
    this.pages.push(page);
    return page;
  }

  findPagesByWebsiteId(websiteId: String) {
    const pagesByWebsite = [];
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {
        pagesByWebsite.push(this.pages[i]);
      }
    }
    return pagesByWebsite;
  }

  findPageById(pageId: String) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        return this.pages[i];
      }
    }
  }

  updatePage(pageId: String, page: any) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages[i] = page;
      }
    }
  }

  deletePage(pageId: String) {
    for (let i = 0; i < this.pages.length; i ++) {
      if (this.pages[i]._id === pageId) {
        return this.pages.splice(i, 1);
      }
    }
  }
}
