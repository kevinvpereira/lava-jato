import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerResolver } from '../customer.resolver';
import { CustomersResolver } from '../customers.resolver';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    resolve: { customers: CustomersResolver },
  },
  {
    path: 'new',
    component: CustomerComponent,
  },
  {
    path: ':id',
    component: CustomerComponent,
    resolve: { customer: CustomerResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
