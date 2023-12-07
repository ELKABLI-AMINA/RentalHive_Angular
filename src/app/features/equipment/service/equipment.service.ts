import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Equipment} from "../../../core/models/equipment";
import {ApiService} from "../../../core/service/api.service";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private apiService: ApiService) {

  }

  getAll(): Observable<Equipment[]> {
    return this.apiService.get<Equipment[]>('/v1/equipments/');
  }

  getById(id: number): Observable<Equipment> {
    return this.apiService.get<Equipment>(`/v1/equipments/${id}`);
  }

  create(equipment: { name: string; description: any; model: any; equipmentType: any; equipmentStatus: any }): Observable<Equipment> {
    return this.apiService.post<Equipment>('/v1/equipments', equipment);
  }

  update(id: number, equipment: Equipment): Observable<Equipment> {
    return this.apiService.put<Equipment>(`/v1/equipments/${id}`, equipment);
  }

  delete(id: number): Observable<void> {

    return this.apiService.delete<void>(`"/{equipmentId}/delete"`);
  }
}
