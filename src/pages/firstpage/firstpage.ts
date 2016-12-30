import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FirstPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'firstpage',
  templateUrl: 'firstpage.html'
})
export class FirstPage {
	nodebooks = ["日记1","日记2","日记3"]
	myname = "小黄人";
	say = "呵呵"

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPagePage');
  }

}
