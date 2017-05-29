import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaxCalculator } from './max-calculator';

@NgModule({
  declarations: [
    MaxCalculator,
  ],
  imports: [
    IonicPageModule.forChild(MaxCalculator),
  ],
  exports: [
    MaxCalculator
  ]
})
export class MaxCalculatorModule {}
