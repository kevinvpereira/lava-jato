import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from './customer/customer';
import { DUMMY_CUSTOMERS, EMPTY_CUSTOMER } from './customer/customer.mock';
import { CustomerService } from './customer/customer.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerResolver implements Resolve<Customer> {
  constructor(private _customerService: CustomerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Customer> {
    const id = route.paramMap.get('id') as string;
    return of(DUMMY_CUSTOMERS.find(customer => customer.id === id) ?? EMPTY_CUSTOMER)
    //return this._customerService.getCustomerById(id);
  }
}
