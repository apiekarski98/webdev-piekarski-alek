import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {Router} from "@angular/router";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

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
          this.developerId = params['userId'];
        }
      );
    this.websiteService.findWebsitesByUser(this.developerId).subscribe((websites) => {
      this.websites = websites;
    });
  }

  create(name: String, description: String) {
    const website: Website = new Website('', name, this.developerId, description);
    this.websiteService.createWebsite(this.developerId, website).subscribe((websites) => {
      this.websites = websites;
      this.router.navigate(['/user', this.developerId, 'website']);
    });


  }
}
