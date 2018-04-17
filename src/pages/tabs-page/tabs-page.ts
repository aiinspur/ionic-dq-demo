import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
//import { LoginPage } from '../login/login';
//import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {


  // set the root pages for each tab
  homeRoot: any = SchedulePage;
  gameRoot: any = SpeakerListPage;
  talkRoot: any = MapPage;
  myRoot: any = AboutPage;
  mySelectedIndex: number;

  

  constructor(navParams: NavParams) {
    console.log(JSON.stringify(navParams.data));
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    console.log(JSON.stringify(this.mySelectedIndex));
    //this.myRoot = LoginPage;
    

  }

}
