import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HelloActions } from '../actions';
import { Observable } from 'rxjs';
import * as fromHello from '../reducers';

@Component({
  template: `
    <button (click)="test()">Say bye</button>
    <pre>
      {{message$ | async}}
    </pre>
  `,
  styles: []
})
export class HelloWorldComponent {
  message$: Observable<string>;

  constructor(private store: Store<fromHello.State>) { 
    this.message$ = store.pipe(select(fromHello.getHelloMessage));
  }

  random() {
    return Math.random().toString(36).substring(7);
  }

  test() {
    this.store.dispatch(HelloActions.sayHello({ message: `Hello ${this.random()}!` }))
  }
}
