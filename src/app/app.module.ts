import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromRoot from './reducers';
import * as fromHello from './reducers/hello.reducer';

const test: ActionReducerMap<unknown, Action> = fromRoot.reducers;

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot(fromRoot.reducers),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Test'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
