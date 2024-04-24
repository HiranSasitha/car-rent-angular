import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
BASE_URL = "http://localhost:8080";
requestHeaders = new HttpHeaders(
  {"No-Auth":"True"}
);
  constructor(private httpClient:HttpClient) { }

  public login(loginData:any){
    console.log("hiran"+loginData.value);

    return this.httpClient.post(this.BASE_URL+"/authenticate",loginData,{headers:this.requestHeaders});
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.httpClient.post(this.BASE_URL + "/authenticate", loginData, { headers, responseType: 'text' });
  }

}
