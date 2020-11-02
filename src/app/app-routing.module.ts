import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { ListRecordsComponent } from './list-records/list-records.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'list',
    component: ListRecordsComponent
  },
  {
    path: 'edit',
    component: EditRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
