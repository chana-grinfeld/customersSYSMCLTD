import { Contact } from "./contact.model";

export interface Customer {
  id: number;
  nameFull: string;
  customerNumber: number;
  city: string;
  street: string;
  contacts: Contact[];
}