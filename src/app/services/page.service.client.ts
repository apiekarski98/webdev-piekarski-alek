import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Response} from "@angular/http";

@Injectable()
export class PageService {
  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page('543', 'Post 3', '456', 'Lorem')
  ];

  api = {
    'createPage': this.createPage,
    'findPagesByWebsiteId': this.findPagesByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };

  constructor(private http: Http) {
  }

  createPage(websiteId: String, page: Page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    var randomId = Math.floor(Math.random() * 1000000);
    page._id = randomId.toString();
    page.websiteId = websiteId;
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPagesByWebsiteId(websiteId: String) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPageById(pageId: String) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updatePage(websiteId: String, page: Page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + page._id;
    return this.http.put(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }

  deletePage(pageId: String) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
