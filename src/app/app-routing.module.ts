import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './customers/add-contact/add-contact.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersDetailsComponent } from './customers/customers-details/customers-details.component';

const routes: Routes = [
  { path: 'customers', component: CustomersDetailsComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent, data: {type: 'show'} },
  { path: 'add-customer', component: CustomerDetailsComponent },
  { path: 'update-customer/:id', component: CustomerDetailsComponent, data: {type: 'edit'} },
  { path: 'add-contact/:id', component: AddContactComponent },
  { path: '', component: CustomersDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
