
import {Equipment} from "./equipment";

export interface EquipmentUnit {
  id: number;
  ref: string;
  equipmentStatus: string;
  quantity: number;
  equipment: Equipment;


}
