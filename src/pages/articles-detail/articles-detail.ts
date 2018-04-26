import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';

@Component({
  selector: 'page-articles-detail',
  templateUrl: 'articles-detail.html'
})
export class ArticlesDetailPage {
  speaker: any;
  article: any;
  content: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: HttpClient,
    public sanitizer: DomSanitizer) {
  }

  ionViewWillEnter() {
    this.getDetails();
  }

  getDetails() {
    this.http.get(AppConfig.article_details_api + "?id=" + this.navParams.data.articleId).subscribe((result: any) => {
      if (result.code == AppConfig.success) {
        this.article = result.data;
        this.getContents(this.article.content);
      }
    });
  }

  getContents(contentFile) {
    console.log(contentFile);
    this.http.get(AppConfig.resource_api + contentFile, { responseType: 'text' }).subscribe(

      (content: any) => {
        this.content = content;
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        //console.log("The POST observable is now completed.");
      }


    );
  }

  assembleHTML(htmlStr: any) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlStr);
  }
}
