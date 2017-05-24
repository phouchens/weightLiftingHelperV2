import { workUnit } from './../../models/workUnit';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'percentage-form',
  templateUrl: 'percentage-form.html'
})
export class PercentageForm implements OnInit {
    units: workUnit[]  = [];
    @Input() max: number;
    constructor() {
      
    }

   ngOnInit(): void {
     this.populateWorkUnits(this.max)
     
   }
  
   ngOnChanges(max: {max:number}): void {
    
     this.populateWorkUnits(this.max);
    
   }
  populateWorkUnits(max): workUnit[] {
    
    this.units.push(max)
    
    // for (let i = .5; i < 1; i += .05) {
    //   let value = i * 100;
    //   let percentage = i * max;
    //   let unit = new workUnit(value, percentage); 
    //   units.push(unit);
    // }
    console.log(this.units)
  
    return this.units;
  }
}
