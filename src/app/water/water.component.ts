import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  template: `
    <button (click)="test()">Water!</button>
  `,
  styles: []
})
export class WaterComponent {
  constructor() { }

  test() {
    
  }
}
