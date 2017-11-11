import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Response} from "@angular/http";

@Injectable()
export class FlickrService {

  api = {
    'searchPhotos': this.searchPhotos,
  };

  key = "your-flickr-key";
  secret = "your-flickr-secret";
  urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";


  constructor(private _http: Http) {
  }

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }

}
