import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private userAuthService:UserAuthService,private router:Router){

  }
  ngOnInit(): void {
    
  }

  login(loginForm:NgForm):void{
     
      this.userService.login(loginForm.value).subscribe(
        (response:any)=>{
          console.log(response.jwtToken);
          console.log(response.user.roles);
          this.userAuthService.setRoles(response.user.roles);
          this.userAuthService.setToken(response.jwtToken);
          const role = response.user.roles[0].roleName;
          console.log(role);
          if(role==="ROLE_ADMIN"){
            this.router.navigate(["/admin"])
          }else{
            this.router.navigate(["/user"])
          }
        },(error)=>{
          console.log(error);
        }
      );
   }


}
