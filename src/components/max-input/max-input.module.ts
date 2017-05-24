import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaxInput } from './max-input';

@NgModule({
  declarations: [
    MaxInput,
  ],
  imports: [
    IonicPageModule.forChild(MaxInput),
  ],
  exports: [
    MaxInput
  ]
})
export class MaxInputModule {}
