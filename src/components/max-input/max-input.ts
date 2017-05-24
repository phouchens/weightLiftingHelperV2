import { Component } from '@angular/core';

@Component({
  selector: 'max-input',
  templateUrl: 'max-input.html'
  })
export class MaxInput {
  max: number;
  constructor() {
    this.max = 0
  }

}
