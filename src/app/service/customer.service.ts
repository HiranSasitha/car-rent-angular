import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  BASE_URL = "http://localhost:8080/customer";

  constructor(private httpClient:HttpClient) { }

  public getAllCustomer(){

    return this.httpClient.get(this.BASE_URL+"/get-all")
  }

  public getCustomerById(custId:any){
    return this.httpClient.get<Customer>(`${this.BASE_URL}/get-by-id/${custId}`)
  }

  public saveCustomer(data:any){
    return this.httpClient.post(this.BASE_URL+"/save",data, { observe: 'response' });
  }
}
