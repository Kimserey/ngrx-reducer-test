import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromRoot from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // StoreModule.forRoot(fromRoot.reducers),
    StoreModule.forRoot({ ...fromRoot.reducers }),
    // StoreModule.forRoot(Object.assign({}, fromRoot.reducers)),
    
    StoreDevtoolsModule.instrument({
      name: 'NgRx Test'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
