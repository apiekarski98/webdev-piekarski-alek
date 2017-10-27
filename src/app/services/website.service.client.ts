import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Response} from "@angular/http";

@Injectable()
export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem')
  ];

  api = {
    'createWebsite': this.createWebsite,
    'findWebsitesByUser': this.findWebsitesByUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  constructor(private http: Http) {
  }

  createWebsite(userId: String, website: Website) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    var randomId = Math.floor(Math.random() * 1000000);
    website._id = randomId.toString();
    website.developerId = userId;
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsitesByUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(userId: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(userId: String, website: Website) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + website._id;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(userId: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

}
