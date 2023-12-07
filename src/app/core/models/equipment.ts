import {User} from "./user";

export interface Equipment {
  id: number;
  name: string;
  equipmentType: string;
  model: string;
  description: string;
  equipmentStatus: string;
}
export type EquipmentCreation = Omit<Equipment, 'id'>;
