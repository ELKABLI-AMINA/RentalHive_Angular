import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/service/api.service";
import {Equipment} from "../../../core/models/equipment";
import {LocationRequest} from "../../../core/models/LocationRequest";
import {ClientDossierRequest} from "../../../core/models/ClientDossierRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private apiService: ApiService) { }
  createLocationRequest(locationRequest: LocationRequest, clientDossier: ClientDossierRequest): Observable<any> {
    const request = {
      locationRequests: [locationRequest],
      clientDossierRequestDto: clientDossier
    };

    return this.apiService.post<Equipment>('/v1/locations/', location);
  }
}
