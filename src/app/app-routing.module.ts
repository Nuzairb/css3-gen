import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { GradientComponent } from './gradient/gradient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'gradient',
    component: GradientComponent
  },
  {
    path: 'box-shadow',
    component: BoxshadowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
