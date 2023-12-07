import {User} from "./user";

export interface Agency {
  /*
  "id": 0,
    "local": "string",
    "is_enabled": true,
    "userList": {
      "id": 0,
      "name": "string",
      "email": "string",
      "enable": true,
      "userRole": "ROLE_ADMIN"
    }
   */
  id : number,
  local : string,
  is_enabled : boolean,
  userList : User
}
