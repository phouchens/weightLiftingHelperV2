import { workUnit } from './../../models/workUnit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'percentage-form',
  templateUrl: 'percentage-form.html'
})
export class PercentageForm implements OnInit {
    units: workUnit[];
    max: number;
    constructor() {}

   ngOnInit(): void {}

  populateWorkUnits(max): workUnit[] {
    var units: workUnit[] = [];
    for (let i = .5; i < 1; i += .05) {
      let value = i * 100;
      let percentage = i * max;
      let unit = new workUnit(value, percentage); 
      units.push(unit);
    }
    return units;
  }
}
