import { Component,ViewChild } from '@angular/core';
import { PopoverController,Nav } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';
import { LoginPage } from '../login/login';
import {
  NavController
} from 'ionic-angular';
import { PageInterface } from '../../app/app.component';
import { ConferenceApp} from '../../app/app.component';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav: Nav;
  conferenceDate = '2047-05-17';
  loginFlag = false;

  

  conferenceApp:ConferenceApp;
  loginPage: PageInterface = { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' };

  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController
  ) { 
    console.log("in AboutPage ");
    //this.needLogin();
    if(this.loginFlag){
      //this.myRoot = AboutPage;
    }else{
      
      console.log("nav:"+this.nav);
      //this.myRoot = LoginPage;
      //navCtrl.push(LoginPage);
      console.log(navCtrl.parent);
      //nav.setRoot(LoginPage);
      console.log(ConferenceApp);
      //this.conferenceApp.openPage(this.loginPage);
       this.nav.setRoot(LoginPage, {}).catch((err: any) => {
         console.log(`Didn't set nav root: ${err}`);
       });
    }
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
