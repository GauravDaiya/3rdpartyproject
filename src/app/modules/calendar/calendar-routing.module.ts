import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcalendarComponent } from './showcalendar/showcalendar.component';

const routes: Routes = [
  {path: '', component: ShowcalendarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
