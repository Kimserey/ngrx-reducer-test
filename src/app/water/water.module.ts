import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { WaterRoutingModule } from './water-routing.module';
import { WaterComponent } from './water.component';

@NgModule({
  declarations: [WaterComponent],
  imports: [
    CommonModule,
    WaterRoutingModule,
    StoreModule.forFeature('water', {})
  ]
})
export class HelloModule { }
