import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PercentageForm } from './percentage-form';

@NgModule({
  declarations: [
    PercentageForm,
  ],
  imports: [
    IonicPageModule.forChild(PercentageForm),
  ],
  exports: [
    PercentageForm
  ]
})
export class PercentageFormModule {}
