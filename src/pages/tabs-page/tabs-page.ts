import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
// import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import {SettingPage} from '../setting/setting';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {


  // set the root pages for each tab
  //homeRoot: any = SchedulePage;
  homeRoot: any = HomePage;
  gameRoot: any = SpeakerListPage;
  talkRoot: any = MapPage;
  aboutRoot: any = AboutPage;
  settingRoot: any = SettingPage;
  mySelectedIndex: number;

  

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    //console.log(JSON.stringify(this.mySelectedIndex));
    

  }

}
