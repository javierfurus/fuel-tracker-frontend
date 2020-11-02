import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  form: FormGroup;
  date: string;
  amountFilled: number;
  roadType: string;
  tripState: number;
  gasType: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRecordComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
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
