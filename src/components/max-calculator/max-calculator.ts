import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'max-calculator',
  templateUrl: 'max-calculator.html'
})
export class MaxCalculator {
  weightLifted: number;
  reps: number = 1;
  oneRepMax: number;

  constructor(public toastCtrl: ToastController) { }

  calculateOneRepMax(): void{
  if(this.weightLifted < 1 || this.weightLifted === undefined) {
    let toast = this.toastCtrl.create({
      message: "Please enter a weight lifted.",
      duration: 10000,
      showCloseButton: true,
      position: "top",
      closeButtonText: 'Got it!',
      dismissOnPageChange: true,
      cssClass: "yourCssClassName",
    });
    toast.present();
    return;
  }
  this.oneRepMax = Math.round(this.weightLifted/ (1.0278 -(this.reps * 0.0278)));
  }

}
