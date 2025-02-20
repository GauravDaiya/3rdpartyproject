import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';

@Component({
  selector: 'app-meetingschedule',
  templateUrl: './meetingschedule.component.html',
  styleUrls: ['./meetingschedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MeetingscheduleComponent implements OnInit {
  selectedDateTime: Date | string | null = null;
  MeetingForm!: FormGroup;
  minEndDate: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MeetingscheduleComponent>
  ) {}

  ngOnInit(): void {
    this.MeetingForm = this.formBuilder.group({
      start: new FormControl('',[Validators.required]),
      end: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  onStartDateChange() {
    const startDate = this.MeetingForm.get('start')?.value;
    if (startDate) {
      this.minEndDate = new Date(startDate).toISOString(); 
    }
  }

  CreateMeeting() {
    this.dialogRef.close(this.MeetingForm.value);
    console.log(this.MeetingForm.value)
  }
}
