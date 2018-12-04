import { Component, OnInit } from '@angular/core';
import { RedditService } from './services/reddit.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'reddit';
  public reddits = [];
  public images = [];
  public reddit;
  constructor(private _redditService: RedditService) {
    
   }

  ngOnInit() { 
   this._redditService.getReddit()
   .subscribe(data => { this.reddits = data.data.children, console.log(data.data.children) });
  }

  // To redirect to actual post
  goToSpecificUrl(url: string): any {
    window.location.href = url;
  }

  // To remove post
  removePost(i: number) {
    this.reddits.splice(i, 1);
  }

  // To refresh the list
  refresh() {
    location.reload();
  }

  // To vote up
  voteUp(i: number) {
    let rows = this.reddits[i]
    rows.data.ups++;
  }

  // To vote down
  voteDown(i: number) {
    let rows = this.reddits[i]
    rows.data.ups--;
  }

}
