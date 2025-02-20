import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutstructureComponent } from './layoutstructure/layoutstructure.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    LayoutstructureComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
