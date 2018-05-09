import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import {SettingPage} from '../setting/setting';
import { HomePage } from '../home/home';
import { PostListPage } from '../post-list/post-list';
import { MatchPage } from '../match/match';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  
  // set the root pages for each tab
  homeRoot: any = HomePage;
  matchRoot: any = MatchPage;
  postRoot: any = PostListPage;
  aboutRoot: any = AboutPage;
  settingRoot: any = SettingPage;
  mySelectedIndex: number;

  

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
