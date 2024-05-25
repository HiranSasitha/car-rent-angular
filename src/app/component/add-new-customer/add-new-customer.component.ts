import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.scss']
})
export class AddNewCustomerComponent {

  constructor(private customerService:CustomerService){}

saveCustomer(loginForm: NgForm) {
  
this.customerService.saveCustomer(loginForm.value).subscribe(
  (response:any)=>{
    console.log(response.body);
    console.log(response.status);

  },

  error=>{
console.log(error);
  }
)
}

}
