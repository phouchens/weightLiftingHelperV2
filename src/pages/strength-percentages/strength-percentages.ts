import { workUnit } from './../../models/workUnit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-strength-percentages',
  templateUrl: 'strength-percentages.html',
})
export class StrengthPercentagesPage { 
  workUnit: workUnit[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
