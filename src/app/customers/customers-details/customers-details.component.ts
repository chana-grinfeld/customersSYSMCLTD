import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})


export class CustomersDetailsComponent implements OnInit {

  constructor(private customersService: CustomersService, private router: Router) { }

  displayedColumns: string[] = ['nameFull', 'customerNumber', 'crud'];
  dataSource: any;

  ngOnInit(): void {
    this.customersService.getCustomersList().subscribe(data=>{
      this.dataSource = data;
    },(error) => {
      alert('היתה בעיה בשליפת הנתונים');
    });
  }

  addCustomer() {
    this.router.navigate(['/add-customer']);
  }

  showCustomerDetails(id: number) {
    this.router.navigate(['/customer-details/' + id]);
  }

  updateCustomer(id: number) {
    this.router.navigate(['/update-customer/' + id]);
  }

  deleteCustomer(id: number) {
    this.customersService.deleteCustomer(id).subscribe(data => {
      if (data != null)
        alert('הלקוח נמחק בהצלחה');
      else
        alert('היתה בעיה בשמירת הנתונים');
    },error => {
      alert('היתה בעיה בשמירת הנתונים');
    });
  }

  addContact(id: number){
    this.router.navigate(['/add-contact/' + id]);
  }

}
