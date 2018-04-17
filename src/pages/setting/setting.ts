
import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { UserData } from '../../providers/user-data';




@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
  })
export class SettingPage {
    username: string;

    constructor( public app: App,
        public userData: UserData){ }

    ngAfterViewInit() {
        this.getUsername();
      }

    needLogin(){
        this.app.getRootNav().setRoot(LoginPage);
    }

    getUsername() {
        this.userData.getUsername().then((username) => {
          this.username = username;
        });
      }

    


}