
import { Component } from '@angular/core';
import { App, NavController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { DqData } from '../../providers/dq-data';
import { UserData } from '../../providers/user-data';




@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {
    loginName: string;

    constructor(public app: App,
        public alertCtrl: AlertController, public nav: NavController, public userData: UserData,
        public dqData: DqData) {
        this.needLogin();
    }

    ngAfterViewInit() {
        this.getUsername();
    }

    needLogin() {

        this.dqData.getUser().then((user) => {
            console.log('user:%o', user);
            if (!user) {
                this.app.getRootNav().setRoot(LoginPage);
            }
        });
    }

    getUsername() {
        this.dqData.getUser().then((user) => {
            this.loginName = user != null && user.loginName;
        });
    }



    updatePicture() {
        console.log('Clicked to update picture');
    }

    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    changeUsername() {
        let alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.loginName,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: (data: any) => {
                this.userData.setUsername(data.username);
                this.getUsername();
            }
        });

        alert.present();
    }

    changePassword() {
        console.log('Clicked to change password');
    }

    logout() {
        this.dqData.logout();
        this.app.getRootNav().setRoot(LoginPage);
        //this.app.getRootNavById('rootPage').;
    }

    support() {
        this.nav.push('SupportPage');
    }


}