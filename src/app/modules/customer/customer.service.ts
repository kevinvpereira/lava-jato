import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private endpoint = `${environment.apiUrl}/customer`;

  constructor(private _http: HttpClient) {}

  getCustomers() {
    return this._http.get<Customer[]>(this.endpoint);
  }

  getCustomerById(id: string) {
    return this._http.get<Customer>(`${this.endpoint}/${id}`);
  }

  saveCustomer(customer: Customer) {
    return this._http.post<Customer>(this.endpoint, customer);
  }

  deleteCustomerById(id: string) {
    return this._http.delete(`${this.endpoint}/${id}`);
  }
}
