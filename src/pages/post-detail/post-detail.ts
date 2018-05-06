import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  pics: any = [];
  picsNum: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {
  }

  addPicDemo() {
    this.pics[this.pics.length+1]="assets/img/speakers/giraffe.jpg";
  }

  addPic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }


    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

}
