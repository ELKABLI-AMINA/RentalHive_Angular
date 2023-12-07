import {User} from "./user";

export interface Client extends User {
  id: number;
  address: string;
  phone: string;
  cin: string;
}
