import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eventdetailsdialog',
  templateUrl: './eventdetailsdialog.component.html',
  styleUrl: './eventdetailsdialog.component.scss'
})
export class EventdetailsdialogComponent {

  @Output() deleteEvent = new EventEmitter<string>();
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EventdetailsdialogComponent>
  ) { }

  deleteMeeting() {
    this.deleteEvent.emit(this.data.eventId);
    this.dialogRef.close()
  }


}
