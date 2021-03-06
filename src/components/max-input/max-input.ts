import { Component } from '@angular/core';

@Component({
  selector: 'max-input',
  templateUrl: 'max-input.html'
})

export class MaxInput {
  max: number;
  weight: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.weight);
  }
  convertToKilos(max: number) {
    this.max = this.max / 2.2;
  }

  convertToPounds(max: number) {
    this.max = this.max * 2.2;
  }

}
