import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as reducer from './reducers';
import { HelloRoutingModule } from './hello-routing.module';
import { HelloWorldComponent } from './components/hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    CommonModule,
    HelloRoutingModule,
    StoreModule.forFeature(reducer.featureKey, reducer.FEATURE_REDUCERS)
  ]
})
export class HelloModule { }
