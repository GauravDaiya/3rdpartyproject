import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutstructureComponent } from './layoutstructure/layoutstructure.component';

const routes: Routes = [
  {path: '', component: LayoutstructureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
