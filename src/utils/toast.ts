
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Toast{

    constructor(
        public toastCtrl: ToastController) {}

    presentToast(msg) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
        });
        toast.present();
      }
}