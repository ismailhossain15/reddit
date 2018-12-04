import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {TruncatePipe} from './material/truncate';


import { AppComponent } from './app.component';
import { RedditService } from './services/reddit.service';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
