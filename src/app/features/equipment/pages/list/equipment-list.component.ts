import {Component, OnInit} from '@angular/core';
import {Equipment} from "../../../../core/models/equipment";
import {EquipmentService} from "../../service/equipment.service";
import {NgForOf, NgIf} from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css'],
  imports: [
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class EquipmentListComponent implements OnInit{
  equipments: Equipment[] = [];
  constructor(private equipmentService: EquipmentService, private router: Router) { }

  ngOnInit(): void {
    this.loadEquipments();
  }

  private loadEquipments(): void {
    this.equipmentService.getAll().subscribe(equipments => {
      console.log("equipments  = ", equipments)
      this.equipments = equipments;
    });
  }
  deleteEquipment(id: number): void {
    if(confirm("Are you sur ?"))
      this.equipmentService.delete(id).subscribe(() => {
        console.log(`Equipment with ID ${id} deleted successfully.`);
        this.loadEquipments();
      });
  }
  navigateToAddEquipment(): void {
    this.router.navigate(['/equipments/add']);
  }



}
