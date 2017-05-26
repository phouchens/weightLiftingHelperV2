import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OneRepMaxPage } from './one-rep-max';

@NgModule({
  declarations: [
    OneRepMaxPage,
  ],
  imports: [
    IonicPageModule.forChild(OneRepMaxPage),
  ],
  exports: [
    OneRepMaxPage
  ]
})
export class OneRepMaxModule {}
