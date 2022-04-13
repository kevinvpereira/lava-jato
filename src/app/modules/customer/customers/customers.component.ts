import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Customer, CustomerTable } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  columns: CustomerTable[] = [
    {
      columnName: 'Id',
      columnProp: 'id',
    },
    {
      columnName: 'Nome',
      columnProp: 'name',
    },
    {
      columnName: 'Telefone',
      columnProp: 'phone',
    },
    {
      columnName: 'Endereço',
      columnProp: 'address',
    },
  ];

  header: string[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.pipe(take(1)).subscribe((data) => {
      this.customers = data.customers ?? [];
    });

    this.header = [
      ...this.columns.map((column) => column.columnProp),
      'cars',
      'actions',
    ];
  }

  getCarsFormatted(customer: Customer) {
    return customer.cars.reduce(
      (prev, curr) => prev + '' + curr.model + ', ',
      ''
    );
  }

  deleteCustomer(id: string) {
    this._customerService
      .deleteCustomerById(id)
      .pipe(switchMap(() => this._customerService.getCustomers()))
      .subscribe((customers) => {
        this.customers = customers;
      });
  }
}
