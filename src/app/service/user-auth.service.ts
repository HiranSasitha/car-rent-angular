import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){

    localStorage.setItem("roles",JSON.stringify(roles));
  }

  public getRoles():[]{
return JSON.parse(<string>localStorage.getItem("roles"));
  }

  public setToken(token:string){
    localStorage.setItem("jwttoken",token);
  }

  public getToken():string{
    return <string>localStorage.getItem("jwttoken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLogin(){
    return this.getToken() && this.getRoles();
  }
}
