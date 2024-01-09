import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customersService: CustomersService, private router: Router) { }
  customer: any = {
    id: null,
    nameFull: '',
    customerNumber: null,
    city: '',
    street: '',
    contacts: []
  };

  isShow: boolean = true;
  customerNumNoValid: boolean = false;
  type: any;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.type = data['type'];
      this.isShow = data['type'] === 'show' ? true : false;
    })
    this.route.params.subscribe(param => {
      if (Object.keys(param).length !== 0)
        this.customersService.getCustomerDetails(param['id']).subscribe(data => {
          if (data != null)
            this.customer = data;
          else
            this.customer = {
              id: null,
              nameFull: '',
              customerNumber: null,
              city: '',
              street: '',
              contacts: []
            };
        }, error => {
          alert('היתה בעיה בשליפת הנתונים');
        });
    });
  }

  save() {
    if (this.type == 'edit') {
      if (this.customer) {
        this.customersService.updateCustomer(this.customer.id, this.customer).subscribe(data => {
          if (data != null) {
            alert('פרטי הלקוח עודכנו בהצלחה');
            this.router.navigate(['/customers']);
          }
          else
            alert('היתה בעיה בשמירת הנתונים');
        }, error => {
          alert('היתה בעיה בשמירת הנתונים');
        });

      }

    } else {
      this.customersService.addCustomer(this.customer).subscribe(data => {
        if (data != null) {
          alert('הלקוח התווסף בהצלחה');
          this.router.navigate(['/customers']);
        }
        else
          alert('היתה בעיה בשמירת הנתונים');
      }, error => {
        alert('היתה בעיה בשמירת הנתונים');
      });

    }
  }

}
