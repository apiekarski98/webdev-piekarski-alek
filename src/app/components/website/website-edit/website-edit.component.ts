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

    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    this.description = this.website['description'];
  }

  update(name: String, description: String) {
    this.websiteService.updateWebsite(this.websiteId, new Website(this.websiteId, name, this.developerId, description));
  }

  delete() {
    this.websiteService.deleteWebsite(this.websiteId);
  }
}
