import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavController } from "ionic-angular";
import { PostDetailPage } from "../post-detail/post-detail";

@Component({
    selector: 'page-post-list',
    templateUrl: 'post-list.html'
})
export class PostListPage {
    list: any;
    postCategory: string = "hot";   //帖子类别. hot-热门 latest-最新 
    constructor(public nav: NavController, public http: HttpClient) {

    }

    ionViewDidLoad() {
        this.lists();
    }

    //创建帖子
    create(){
        this.nav.push(PostDetailPage);
    }

    //帖子列表
    lists(){
        this.http.get('assets/data/data.json').subscribe((val: any)=>{
            console.log('json:%o',val.community);
            this.list = val.community;
        });;
    }

}