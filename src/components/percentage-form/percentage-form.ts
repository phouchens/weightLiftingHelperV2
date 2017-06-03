import { UNITS } from './../../models/percent-structure';
import { workUnit } from './../../models/workUnit';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'percentage-form',
  templateUrl: 'percentage-form.html'
})

export class PercentageForm {
  units: workUnit[] = UNITS;
  @Input() max: number;
  constructor() { }

}
