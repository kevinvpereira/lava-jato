import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from './customer/customer';
import { DUMMY_CUSTOMERS } from './customer/customer.mock';
import { CustomerService } from './customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersResolver implements Resolve<Customer[]> {
  constructor(private _customerService: CustomerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Customer[]> {
    return of(DUMMY_CUSTOMERS);
    //return this._customerService.getCustomers();
  }
}
