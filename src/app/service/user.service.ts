import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
BASE_URL = "http://localhost:8080";
requestHeaders = new HttpHeaders(
  {"No-Auth":"True"}
);
  constructor(private httpClient:HttpClient,private userAuth:UserAuthService) { }

  public login(loginData:any){
    

    return this.httpClient.post(this.BASE_URL+"/authenticate",loginData,{headers:this.requestHeaders});
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.httpClient.post(this.BASE_URL + "/authenticate", loginData, { headers, responseType: 'text' });
  }

 // @ts-ignore

  public roleEquel(allowRoles:any):boolean{
    let isMatch = false;
    const userRoles:any[] = this.userAuth.getRoles();                   

    if (userRoles) {
        for (let i = 0; i < userRoles.length; i++) {
            for (let j = 0; j < allowRoles.length; j++) {
                if (userRoles[i].roleName === allowRoles[j]) {
                    isMatch = true;
                    return isMatch;
                }else{
                  return isMatch;
                }
                
            }
        }
    }

   
}
  }


