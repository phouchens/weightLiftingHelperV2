import { OneRepMaxPage } from './../one-rep-max/one-rep-max';
import { StrengthPercentagesPage } from './../strength-percentages/strength-percentages';

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StrengthPercentagesPage;
  tab2Root = OneRepMaxPage;
  tab3Root = AboutPage;
  constructor() {}
}
