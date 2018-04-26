import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../app/app.config';
import { Toast } from '../../../utils/toast';
import { DqData } from '../../../providers/dq-data';

@Component({
    selector: 'page-password',
    templateUrl: 'password.html'
})
export class PasswordPage {
    submitted = false;
    disa: string = 'disabled';
    pwd = { id: '', password: '', newPwd: '', newPwd_: '' };

    constructor(private http: HttpClient,
        public toast: Toast,
        public dqData: DqData) {

    }

    submit(form: NgForm) {
        this.submitted = true;

        //console.log('json:%o', this.pwd);
        if (form.valid) {
            console.log('form valid');
            this.dqData.getUser().then((user: any) => {
                this.pwd.id = user.id;
                this.changePwd();
            });
        }
    }


    changePwd() {
        console.log('req:%o',this.pwd);
        this.http
            .post(AppConfig.user_change_pwd_api, this.pwd)
            .subscribe(
                (result: any) => {
                    this.toast.presentToast(result.msg);
                    if (result.code == AppConfig.success) {
                        console.log("修改密码成功");
                        //this.navCtrl.push(TabsPage);
                    }
                },
                response => {
                    console.log("POST call in error", response);
                    this.toast.presentToast(JSON.stringify(response));
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
    }

    check(){
        if(this.pwd.password!='' && this.pwd.newPwd!='' && this.pwd.newPwd_!=''){
            this.disa = '';
        }else{
            this.disa = 'disabled';
        }
    }


}