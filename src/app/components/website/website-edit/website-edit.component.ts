import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from "../../../models/website.model.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websiteId: String;
  website: {};
  name: String;
  developerId: String;
  description: String;
  websites= [{}];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.developerId = params['userId'];
        }
      );

    this.website = this.websiteService.findWebsiteById(this.developerId, this.websiteId);
    this.name = this.website['name'];
    this.description = this.website['description'];
    this.websiteService.findWebsitesByUser(this.developerId);
  }

  update(name: String, description: String) {
    const website = new Website(this.websiteId, name, this.developerId, description);
    this.websiteService.updateWebsite(this.developerId, website).subscribe((websites) => {
      this.websites = websites;
    });
  }

  delete() {
    this.websiteService.deleteWebsite(this.developerId, this.websiteId).subscribe((websites) => {
      this.websites = websites;
    });
  }
}
