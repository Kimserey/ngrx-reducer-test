import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromRoot from './reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot(fromRoot.ROOT_REDUCERS),
    // StoreModule.forRoot({ ...fromRoot.reducers }),
    // StoreModule.forRoot(Object.assign({}, fromRoot.reducers)),
    
    StoreDevtoolsModule.instrument({
      name: 'NgRx Test'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
