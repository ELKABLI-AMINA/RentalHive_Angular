import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgencyListComponent} from "./features/agency/pages/agency-list/agency-list.component";
import {AgencyDetailsComponent} from "./features/agency/pages/agency-details/agency-details.component";
import {EquipmentListComponent} from "./features/equipment/pages/list/equipment-list.component";
import {HomeComponent} from "./shared/home/home.component";
import {EquipmentAddEditComponent} from "./features/equipment/pages/equipment-add-edit/equipment-add-edit.component";
import {AddLocationComponent} from "./features/location/add-location/add-location.component";

const routes: Routes = [
 // { path: '', redirectTo: '/agencies', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agencies', component: AgencyListComponent },
  { path: 'agencies/:id', component: AgencyDetailsComponent },
  { path: 'equipment', component: EquipmentListComponent },
  { path: 'equipments/add', component: EquipmentAddEditComponent },
  { path: 'location', component: AddLocationComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
