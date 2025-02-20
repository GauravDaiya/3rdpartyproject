import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowchartsComponent } from './showcharts/showcharts.component';

const routes: Routes = [
  {path: '', component: ShowchartsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
