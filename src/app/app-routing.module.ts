import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/water', pathMatch: 'full' },
  {
    path: 'hello',
    loadChildren: './hello/hello.module#HelloModule'
  },
  {
    path: 'water',
    loadChildren: './water/water.module#WaterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
