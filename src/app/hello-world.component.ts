import { Component } from '@angular/core';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';
import { HelloActions } from './actions';

@Component({
  template: `
    <button (click)="test()">Say bye</button>
  `,
  styles: []
})
export class HelloWorldComponent {
  constructor(private store: Store<fromRoot.State>) { }

  test() {
    this.store.dispatch(HelloActions.saySomething({ message: 'Hello World!' }))
  }
}
