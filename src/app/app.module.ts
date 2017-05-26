import { OneRepMaxPage } from './../pages/one-rep-max/one-rep-max';
import { MaxInput } from './../components/max-input/max-input';
import { PercentageForm } from './../components/percentage-form/percentage-form';
import { StrengthPercentagesPage } from './../pages/strength-percentages/strength-percentages';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule }   from '@angular/forms';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    StrengthPercentagesPage,
    AboutPage,
    TabsPage,
    OneRepMaxPage,
    PercentageForm,
    MaxInput
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    StrengthPercentagesPage,
    OneRepMaxPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
