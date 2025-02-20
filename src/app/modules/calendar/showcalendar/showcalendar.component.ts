import { Component, inject, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { MeetingscheduleComponent } from '../meetingschedule/meetingschedule.component';
import { EventdetailsdialogComponent } from '../eventdetailsdialog/eventdetailsdialog.component';

@Component({
  selector: 'app-showcalendar',
  templateUrl: './showcalendar.component.html',
  styleUrl: './showcalendar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ShowcalendarComponent implements OnInit {

   

  readonly dialog = inject(MatDialog);

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor(private renderer: Renderer2, private formBuilder: FormBuilder) { }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today customButton1', // Default buttons on the left
      center: 'title', // Title is centered
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth' // Default buttons on the right + custom button
    },
    customButtons: {
      customButton1: {
        text: 'New Meeting', // Button text
        click: this.customButtonClick.bind(this) // Event handler for the custom button
      },
    },
    eventClick: this.handleEventClick.bind(this),
  }

  ngOnInit(): void {

  }

  handleEventClick(eventInfo: any) {
    
    const eventData = eventInfo.event;
    const eventPosition = eventInfo.jsEvent;

    const dialogRef = this.dialog.open(EventdetailsdialogComponent, {
      data: {
        eventId: eventData.id,
        title: eventData.title,
        description: eventData.extendedProps.description,
        start: eventData.start,
        end: eventData.end,
      },
      position: {
        top: `${eventPosition.pageY - 50}px`, // Adjust position from the top
        left: `${eventPosition.pageX + 10}px` // Adjust position from the left
      },
      width: '300px'
    });

    dialogRef.componentInstance.deleteEvent.subscribe((eventId: string) => {
      this.deleteEventFromCalendar(eventId);
    });

  }

  deleteEventFromCalendar(eventId: string) {
    const calendarApi = this.calendarComponent.getApi();
    const event = calendarApi.getEventById(eventId);
    if (event) {
      event.remove();
    }
  }

  customButtonClick() {
    
    this.calendarComponent.getApi().changeView('dayGridMonth')

    const dialogRef = this.dialog.open(MeetingscheduleComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Received meeting data:', result);

        this.addMeetingToCalendar(result);
      }
    });
  }

  addMeetingToCalendar(meetingData: any) {
    const { start, end, title, description } = meetingData;

    const event = {
      title: title,
      start: start,
      end: end,
      description: description,
      allDay: false
    };

    this.calendarComponent.getApi().addEvent(event);
  }
}
