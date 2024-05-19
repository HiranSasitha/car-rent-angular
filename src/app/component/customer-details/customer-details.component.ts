import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customerId:any;
  customer!: Customer;;

  constructor(private route:Router,private activeRoute:ActivatedRoute,private customerService:CustomerService){}

  ngOnInit(): void {
    // this.customerId = this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.paramMap.subscribe(
      param =>{
        this.customerId = param.get('id');
      }
    );
   console.log(this.customerId);
   this.getCustomer();
  }

  getCustomer():void{

    if(this.customerId!=null){
      this.customerService.getCustomerById(this.customerId).subscribe(
        (data: Customer) =>{
          this.customer = data;
          console.log(this.customer);
          
        },
        error=>{
          console.log("Error",error);
        }
      );
    }



  }

}
