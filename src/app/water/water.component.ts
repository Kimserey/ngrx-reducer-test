import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelloActions } from '../hello/actions';

@Component({
  template: `
    <button (click)="test()">Water!</button>
    <a [routerLink]="['/hello']">go</a>
  `,
  styles: []
})
export class WaterComponent {
  constructor(private store: Store<any>) { }

  test() {
    this.store.dispatch(HelloActions.sayHello({ message: 'WHAT' }));
  }
}
