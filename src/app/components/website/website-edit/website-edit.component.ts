import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from "../../../models/website.model.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websiteId: String;
  website: Website;
  name: String;
  developerId: String;
  description: String;
  websites: Website[];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.developerId = params['userId'];
        }
      );

    this.websiteService.findWebsiteById(this.developerId, this.websiteId).subscribe((website) => {
      this.website = website;
    });
    this.websiteService.findWebsitesByUser(this.developerId).subscribe((websites) => {
      this.websites = websites;
    });
    this.name = this.website['name'];
    this.description = this.website['description'];
  }

  update(name: String, description: String) {
    const website = new Website(this.websiteId, name, this.developerId, description);
    this.websiteService.updateWebsite(this.developerId, website).subscribe((websites) => {
      this.websites = websites;
      this.router.navigate(['/user', this.developerId, 'website']);
    });
  }

  delete() {
    this.websiteService.deleteWebsite(this.developerId, this.websiteId).subscribe((websites) => {
      this.websites = websites;
      this.router.navigate(['/user', this.developerId, 'website']);
    });
  }
}
