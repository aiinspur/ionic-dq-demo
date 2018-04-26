import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { User } from '../../interfaces/user-model';
import { AppConfig } from '../../app/app.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Result } from '../../interfaces/result';
import { Toast } from '../../utils/toast';
import { DqData } from '../../providers/dq-data';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: User = { loginName: '', password: '' ,tenantId:'',mobile: ''};;
  submitted = false;

  constructor(
    public navCtrl: NavController, 
    public dqData: DqData,
    private http: HttpClient,
    public toast: Toast) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.login.tenantId = AppConfig.tenantId;
      const headers = new HttpHeaders().set("Content-Type", "application/json");
      this.http
          .post(AppConfig.user_login_api,this.login,{headers})
          .subscribe(
            (result:any) => {
                this.toast.presentToast(result.msg);
                if(result.code == AppConfig.success){
                  this.dqData.storeUser(result.data);
                  console.log("用户:%s登陆成功,id:%s",result.data.loginName,result.data.id);
                  this.navCtrl.push(TabsPage);
                }
            },
            response => {
                console.log("POST call in error", response);
                this.toast.presentToast(JSON.stringify(response));
            },
            () => {
                //console.log("The POST observable is now completed.");
            });
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
      
}