import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomerCar, CustomerTable } from '../customer';
import { take } from 'rxjs/operators';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;

  cars: CustomerCar[] = [];

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this._activatedRoute.data.pipe(take(1)).subscribe(data => {
      this.initCustomerForm(data.customer);
    })
  }

  initCustomerForm(customer?: Customer) {
    this.customerForm = this._fb.group({
      id: [''],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });

    if (customer) {
      this.customerForm.patchValue(customer);
      this.cars = customer.cars;
    }
  }

  save(){
    if(this.customerForm.invalid){
      this.customerForm.markAllAsTouched();
      return;
    }

    this._customerService.saveCustomer(this.customer);
  }

  get nameControlInvalid(){
    const nameControl = this.customerForm.get('name');

    return nameControl?.invalid && nameControl.touched;
  }

  get phoneControlInvalid(){
    const phoneControl = this.customerForm.get('phone');

    return phoneControl?.invalid && phoneControl.touched;
  }

  get addressControlInvalid(){
    const addressControl = this.customerForm.get('address');

    return addressControl?.invalid && addressControl.touched;
  }

  private get customer(){
    const customer: Customer = this.customerForm.value;
    customer.cars = this.cars;

    return customer; 
  }
}
