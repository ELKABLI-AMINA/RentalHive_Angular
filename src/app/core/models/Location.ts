import {Equipment} from "./equipment";
import {EquipmentUnit} from "./EquipmentUnit";
import {DossierLocation} from "./DossierLocation";


export interface Location {
  id: number;
  quantity: number;
  reference: string;
  startDate: string; // Utilisez le type de date approprié pour vos besoins
  endDate: string;   // Utilisez le type de date approprié pour vos besoins
  status: string;    // Ou utilisez un type enum si nécessaire
  paymentStatus: string; // Ou utilisez un type enum si nécessaire
  equipmentUnit: EquipmentUnit;
  equipment: Equipment;
  dossierLocation: DossierLocation;
}
