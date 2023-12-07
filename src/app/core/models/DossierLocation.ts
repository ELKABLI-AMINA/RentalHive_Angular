import {Client} from "./Client";

export interface DossierLocation {
  id: number;
  dossierNumber: string;
  dateCreation: string;
  client: Client;
  status: string;
  location: Location[];


}
