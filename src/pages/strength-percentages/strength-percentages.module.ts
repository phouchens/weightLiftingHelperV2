import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrengthPercentagesPage } from './strength-percentages';

@NgModule({
  declarations: [
    StrengthPercentagesPage,
  ],
  imports: [
    IonicPageModule.forChild(StrengthPercentagesPage),
  ],
  exports: [
    StrengthPercentagesPage
  ]
})
export class StrengthPercentagesModule {}
