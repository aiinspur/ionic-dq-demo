import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { DqData } from '../../providers/dq-data';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

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
  picsStore: any = [];
  picsNum: any = 0;
  postText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera,
    public http: HttpClient, public dqdata: DqData,
    public transfer: FileTransfer) {
  }

  createPost() {


    this.dqdata.getUser().then((user: any) => {
      console.log(user);
      let createPostReq = {
        "creatorId": user.id,
        "postText": this.postText,
        "attachments": [{
          "postAttaType": 1,
          "attaFileName": "123444334.jpg"
        },
        {
          "postAttaType": 1,
          "attaFileName": "887736363633.jpg"
        }
        ]
      };
      const headers = new HttpHeaders().set("Content-Type", "application/json");
      this.http.post(AppConfig.post_create_api, createPostReq, { headers })
        .subscribe(
          (res: any) => {
            console.log(res);
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
    });

    console.log("submit success");
  }


  create() {

  }

  addPicDemo() {
    this.pics[this.pics.length + 1] = "assets/img/speakers/giraffe.jpg";
  }

  addPic() {
    const options: CameraOptions = {
      quality: 100,
      //destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }


    this.camera.getPicture(options).then((fileUrl) => {
      //let base64Image = 'data:image/jpeg;base64,' + image;
      //console.log(base64Image);
      console.log(fileUrl);
      this.uploadPic(fileUrl);

    });
  }

  uploadPic(fileUrl){

    const fileTransfer: FileTransferObject = this.transfer.create();
    console.log(fileTransfer);

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name123.jpg',
      headers: {}
    }

    console.log("options:%o",options);

    fileTransfer.upload(fileUrl, AppConfig.attachment_upload_one, options)
      .then((data) => {
        // success
        console.log("data:%o",data);
      }, (err) => {
        // error
        console.log("error:%o",err);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

  

}
