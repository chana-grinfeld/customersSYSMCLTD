import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  api: string = 'https://localhost:7125/api/';

  getCustomersList() { 
    return this.http.get(this.api + "Customers");
  }

  getCustomerDetails(customerId: number) {
    return this.http.get(this.api + "Customers/" + customerId);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.api + "Customers/DeleteCustomer/" + id);
  }

  updateCustomer(customerId: number, customer: Customer) {
    return this.http.put(this.api + "Customers/" + customerId , {customer})
  }

  addCustomer(customer: Customer) {
    return this.http.post(this.api + "Customers/", {customer});
  }

  addContact(customerId: number, contact: Contact) {
    return this.http.post(this.api + "Customers/customers/" + customerId + "/contacts", {contact});
  }
}