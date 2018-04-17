import { Component } from '@angular/core';
import { PopoverController,App } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';
import { LoginPage } from '../login/login';
import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  loginFlag = false;

  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public app: App,
  ) { 
    console.log("in AboutPage ");
    // if(this.loginFlag){
    //   this.myRoot = AboutPage;
    // }else{
    //   this.app.getRootNav().setRoot(LoginPage);
    // }
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  needLogin(){
    console.log("in need login");
    //let login = { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' };
    if(1==1){
      this.navCtrl.push(LoginPage, { });
    }
    

  }
}
