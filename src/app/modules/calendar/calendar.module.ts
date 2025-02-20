import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ShowcalendarComponent } from './showcalendar/showcalendar.component';
import { MeetingscheduleComponent } from './meetingschedule/meetingschedule.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { EventdetailsdialogComponent } from './eventdetailsdialog/eventdetailsdialog.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ShowcalendarComponent,
    MeetingscheduleComponent,
    EventdetailsdialogComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SidebarComponent
  ],
  exports: [],
  providers: []
})
export class CalendarModule { }
