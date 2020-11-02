import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  id: number;
  form: FormGroup;
  date: string;
  amountFilled: number;
  roadType: string;
  tripState: number;
  gasType: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditRecordComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    const track = data.track;
    this.id = track.id;
    this.amountFilled = track.amountFilled;
    this.roadType = track.roadType;
    this.tripState = track.tripState;
    this.date = track.date.format;
    this.gasType = track.gasType;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.id,
      amountFilled: this.amountFilled,
      roadType: this.roadType,
      tripState: this.tripState,
      gasType: this.gasType,
      date: this.date
    });
  }
  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
