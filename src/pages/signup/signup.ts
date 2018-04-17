import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { DqData } from '../../providers/dq-data';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { User } from '../model/user';
import { AppConfig } from '../../app/app.config';
import { Result } from '../model/result';
import { toast} from '../../utils/toast';
import { TabsPage } from '../tabs-page/tabs-page';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  
  result: Result;
  //signup: UserOptions = { username: '', password: '' };
  signup: User = { loginName: '', password: '' ,tenantId:'',mobile: ''};
  submitted = false;

  constructor(public navCtrl: NavController, 
    public userData: UserData,
    private http: HttpClient,
    public toast: toast,
    public dqData: DqData) {
      console.log("constructor:",this.signup);

    }

  onSignup(form: NgForm) {
    this.submitted = true;

    console.log("form:",form);

    if (form.valid) {
      this.signup.loginName = this.signup.mobile;
      this.signup.tenantId = AppConfig.tenantId;
      console.log("AppConfig.tenantId:",AppConfig.tenantId);
      console.log(this.signup);

      const headers = new HttpHeaders().set("Content-Type", "application/json");
      this.http
          .post(AppConfig.user_regist_api,JSON.stringify(this.signup),{headers})
          .subscribe(
            (val) => {
                this.result = JSON.parse(JSON.stringify(val));
                this.toast.presentToast(this.result.msg);
                if(this.result.code == AppConfig.success){
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


  
}
