import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddRecordComponent } from '../add-record/add-record.component';
import { EditRecordComponent } from '../edit-record/edit-record.component';
const URL = 'http://localhost:3000/track/';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.css']
})
export class ListRecordsComponent implements OnInit {
  title = 'list-records';
  tracks: any = [];
  interval: any;
  deletedRow: string;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog) { }
  public openEditDialog(track): void {
    const editDialogConfig = new MatDialogConfig();

    editDialogConfig.disableClose = true;
    editDialogConfig.autoFocus = true;

    editDialogConfig.data = {
      track
    };

    const dialogRef = this.dialog.open(EditRecordComponent, editDialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.onUpdateData(data)
    );
  }
  public openNewDialog(): void {
    const addNewDialogConfig = new MatDialogConfig();

    addNewDialogConfig.disableClose = true;
    addNewDialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddRecordComponent, addNewDialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.onCreateNewRecord(data)
    );
  }
  public deleteRow(id: number): Observable<string> {
    return this.http
      .delete(URL + id, { responseType: 'text' });
  }
  public updateRow(trackRow): Observable<object> {
    const id = trackRow.id;
    return this.http
      .put(URL + id, trackRow);
  }

  public createNewRecord(newRecord): Observable<object> {
    console.log(newRecord);
    return this.http
      .post(URL, newRecord);
  }

  ngOnInit(): void {
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  public fetchData(): void {
    this.http.get(URL).subscribe((res) => {
      this.tracks = res;
    });
  }

  public onDeleteData(trackRow): void {
    this.deleteRow(trackRow.id).subscribe(() => {
      this.fetchData();
    });
  }

  public onUpdateData(trackRow): void {
    this.updateRow(trackRow).subscribe(() => {
      this.fetchData();
    });
  }

  public onCreateNewRecord(newRecord): void {
    this.createNewRecord(newRecord).subscribe(() => {
      this.fetchData();
    });
  }
}
