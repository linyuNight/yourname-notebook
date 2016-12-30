import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Secondpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'secondpage',
  templateUrl: 'secondpage.html'
})
export class SecondPage {
	type: string = "diary";
	diarys = [1,2,3];
	node_time = "11:12";
	node_title = "标题";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondpagePage');
  }

  tomenu() {
  	this.navCtrl.pop();
  }
}
