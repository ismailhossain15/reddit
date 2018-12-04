import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RedditService {

  constructor(private _http: HttpClient) { }

  getReddit(): Observable<any> {
    return this._http.get<any>('https://www.reddit.com/r/angular2.json')
  }
}
