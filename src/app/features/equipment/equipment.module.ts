// equipment.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EquipmentDetailsComponent } from './pages/details/equipment-details.component';
import { EquipmentAddEditComponent } from './pages/equipment-add-edit/equipment-add-edit.component';
import { EquipmentListComponent } from './pages/list/equipment-list.component';

@NgModule({
  declarations: [EquipmentDetailsComponent, EquipmentAddEditComponent, EquipmentListComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class EquipmentModule {}
