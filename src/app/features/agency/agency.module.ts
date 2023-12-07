import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyDetailsComponent } from './pages/agency-details/agency-details.component';
import { AgencyAddEditComponent } from './pages/agency-add-edit/agency-add-edit.component';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';


@NgModule({
  declarations: [
    AgencyDetailsComponent,
    AgencyAddEditComponent,
    AgencyListComponent
  ],

  imports: [
    CommonModule
  ]
})
export class AgencyModule { }
