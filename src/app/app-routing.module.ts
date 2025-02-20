import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/layout/layout.module').then(m=>m.LayoutModule)},
  {path: 'calendar', loadChildren: () => import('./modules/calendar/calendar.module').then(m=>m.CalendarModule)},
  {path: 'charts', loadChildren: () => import('./modules/charts/charts.module').then(m=>m.ChartsModule)},
  {path: 'sliders', loadChildren: () => import('./modules/sliders/sliders.module').then(m=>m.SlidersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
