import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customersService: CustomersService, private router: Router) { }

  contact: any;
  customerId: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.customerId = param['id'];
      this.getEmptyContact();
    });
  }

  getEmptyContact() {
    this.contact = {
      fullName: '',
      officeNumber: '',
      email: '',
      customerId: this.customerId
    };
  }

  save() {
    this.customersService.addContact(this.customerId, this.contact).subscribe(data => {
      if (data == 'success')
        alert('איש הקשר נוסף בהצלחה');
      else
        alert('נכשלה הוספת איש הקשר');
    },error => {
      alert('היתה בעיה בשמירת הנתונים');
    });
    this.router.navigate(['/customers']);
  }

}
