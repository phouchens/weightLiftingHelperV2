import { Component } from '@angular/core';

@Component({
  selector: 'max-calculator',
  templateUrl: 'max-calculator.html'
})
export class MaxCalculator {
  weightLifted: number;
  reps: number;
  oneRepMax: number;

  constructor() { }

  calculateOneRepMax(weightLifted:number, reps:number): number{
  return weightLifted/ (1.0278 -(reps * 0.0278));
  // Total Weight Lifted in Pounds / (1.0278 - (Number of Repetitions x 0.0278)) = ~1RM
  }
}
