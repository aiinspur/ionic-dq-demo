
import { Component } from '@angular/core';
import { App, NavController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { DqData } from '../../providers/dq-data';
import { UserData } from '../../providers/user-data';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { Toast } from '../../utils/toast';
import { PasswordPage } from './password/password';




@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {
    loginName: string;
    nickname: string;

    items = [
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox',
        'Tetris',
        'Donkey Kong III',
        'GoldenEye 007',
        'Doom',
        'Fallout',
        'GTA',
        'Halo'
      ];

    constructor(public app: App,
        public alertCtrl: AlertController,
        public nav: NavController,
        public userData: UserData,
        private http: HttpClient,
        public toast: Toast,
        public dqData: DqData) {
        // init one
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this.needLogin();
        console.log(this.loginName);
        console.log(this.items);
    }

    needLogin() {
        this.dqData.getUser().then((user) => {
            console.log('need log user', user);
            if (!user) {
                this.app.getRootNav().setRoot(LoginPage);
            } else {
                this.getUsername();
            }
        });
    }

    getUsername() {
        this.dqData.getUser().then((user) => {
            this.loginName = user != null && user.loginName;
            this.nickname = user.nickname;
        });
    }



    updatePicture() {
        console.log('Clicked to update picture');
        this.chgNickname('-----');
    }

    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    changeUsername() {
        let alert = this.alertCtrl.create({
            title: '修改昵称',
            buttons: [
                '取消'
            ]
        });
        alert.addInput({
            name: 'nickname',
            value: this.nickname,
            placeholder: '请输入昵称'
        });
        alert.addButton({
            text: '确定',
            handler: (data: any) => {
                console.log('data:', data);
                this.chgNickname(data);
            }
        });

        alert.present();
    }


    chgNickname(data) {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        this.dqData.getUser().then((user) => {
            let req = { tenantId: user.tenantId, nickname: data.nickname, id: user.id };
            console.log('change nickname req:', req);
            this.http
                .post(AppConfig.user_saveorupdate_api, req, { headers })
                .subscribe(
                    (result: any) => {
                        this.toast.presentToast(result.msg);
                        console.log("user:", result.data);

                        this.dqData.queryUser(result.data.id).then((user) => {
                            console.log('query user:', user);
                            this.dqData.storeUser(user);
                        });
                    },
                    response => {
                        console.log("POST call in error", response);
                        this.toast.presentToast(response.statusText);
                    },
                    () => {
                        console.log("The POST observable is now completed.");
                        this.nickname = data.nickname;
                    }
                );
        });
    }

    changePassword() {
        console.log('Clicked to change password');
        this.nav.push(PasswordPage);
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