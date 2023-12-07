import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EquipmentService } from "../../service/equipment.service";
import { Equipment } from "../../../../core/models/equipment";

@Component({
  selector: 'app-equipment-add-edit',
  templateUrl: './equipment-add-edit.component.html',
  styleUrls: ['./equipment-add-edit.component.css']
})
export class EquipmentAddEditComponent implements OnInit {
  equipmentForm!: FormGroup;


  constructor(private fb: FormBuilder, private equipmentService: EquipmentService) {}

  ngOnInit() {
    this.equipmentForm = this.fb.group({
      name: ['', Validators.required],
      equipmentType: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
      equipmentStatus: ['', Validators.required],
    });
  }

  saveEquipment() {


    if (this.equipmentForm.invalid) {
      return;
    }

    let equipment: Equipment = this.equipmentForm.value;
    console.log("###### equipment ",equipment);
    this.equipmentService.create(equipment).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
