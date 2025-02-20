import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SlidersRoutingModule,
    FormsModule,
    SlickCarouselModule,
    SidebarComponent,
    TranslateModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidersModule { }
