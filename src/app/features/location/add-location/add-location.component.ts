// add-location.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {ClientDossierRequest} from "../../../core/models/ClientDossierRequest";
import {LocationRequest} from "../../../core/models/LocationRequest";
import {LocationServiceService} from "../service/location-service.service";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  locationForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationServiceService
  ) {}

  ngOnInit() {
    this.locationForm = this.fb.group({
      // Ajoutez les champs nécessaires pour créer une demande de location
      equipmentReference: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
      paymentStatus: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      cin: ['', Validators.required]
    });
  }

  saveLocation() {
    if (this.locationForm.invalid) {
      return;
    }

    const locationRequest: LocationRequest = {
      reference: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      equipmentReference: this.locationForm.value.equipmentReference,
      quantity: this.locationForm.value.quantity,
      startDate: this.locationForm.value.startDate,
      endDate: this.locationForm.value.endDate,
      status: this.locationForm.value.status,
      paymentStatus: this.locationForm.value.paymentStatus
    };

    const clientDossierRequest: ClientDossierRequest = {
      firstName: this.locationForm.value.firstName,
      lastName: this.locationForm.value.lastName,
      email: this.locationForm.value.email,
      address: this.locationForm.value.address,
      phone: this.locationForm.value.phone,
      cin: this.locationForm.value.cin
    };

    this.locationService.createLocationRequest(locationRequest, clientDossierRequest).subscribe({
      next: (data: any) => {
        alert('Location request created successfully!');
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
