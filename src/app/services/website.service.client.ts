import {Website} from '../models/website.model.client';

export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456'),
    new Website('234', 'Tweeter', '456'),
    new Website('456', 'Gizmodo', '456'),
    new Website('890', 'Go', '123'),
    new Website('567', 'Tic Tac Toe', '123'),
    new Website('678', 'Checkers', '123'),
    new Website('789', 'Chess', '234')
  ];

  api = {
    'createWebsite': this.createWebsite,
    'findWebsitesByUser': this.findWebsitesByUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  createWebsite(userId: String, website: any) {
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: String) {
    const websitesByUser = [];
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i].developerId === userId) {
        websitesByUser.push(this.websites[i]);
      }
    }
    return websitesByUser;
  }

  findWebsiteById(websiteId: String) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        return this.websites[i];
      }
    }
  }

  updateWebsite(websiteId: String, website: any) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i] = website;
      }
    }
  }

  deleteWebsite(websiteId: String) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        return this.websites.splice(i, 1);
      }
    }
  }

}
