import { Component } from '@angular/core';
import {MenuService} from "../../service/menu.service";
import 'bootstrap';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private menuService:MenuService,private userAuth:UserAuthService , private router:Router,public userService:UserService) {
  }
 toggleMenu(){
this.menuService.toggle();
 }

 public isLogin(){
return this.userAuth.isLogin();
 }

 public logOut(){
  this.userAuth.clear();
  this.router.navigate(["/login"]);

 }

}
