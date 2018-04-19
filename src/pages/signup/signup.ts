import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { DqData } from '../../providers/dq-data';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { User } from '../../interfaces/user';
import { AppConfig } from '../../app/app.config';
// import { Result } from '../../interfaces/result';
import { Toast} from '../../utils/toast';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  
  signup: User = { loginName: '', password: '' ,tenantId:'',mobile: ''};
  submitted = false;

  constructor(public navCtrl: NavController, 
    public userData: UserData,
    private http: HttpClient,
    public toast: Toast,
    public dqData: DqData) {

    }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      form.value.loginName = form.value.mobile;
      form.value.tenantId = AppConfig.tenantId;

      console.log("form2:",form.value);

      let headers = new HttpHeaders().set("Content-Type", "application/json");
      this.http
          .post(AppConfig.user_regist_api,form.value,{headers})
          .subscribe(
            (result:any) => {
                this.toast.presentToast(result.msg);
                if(result.code == AppConfig.success){
                  this.navCtrl.push(LoginPage);
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
