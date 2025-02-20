import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ShowchartsComponent } from './showcharts/showcharts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ShowchartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    BaseChartDirective,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
    SidebarComponent,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  
})
export class ChartsModule { }
