import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers:any[]=[];

  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    this.getAllCustomer();
   
  }
getAllCustomer():void{
this.customerService.getAllCustomer().subscribe(
  (response:any)=>{
   
    this.customers=response;
    console.log(this.customers);
  }
);
}

}
