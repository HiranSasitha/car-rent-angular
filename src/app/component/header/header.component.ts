import { Component } from '@angular/core';
import {MenuService} from "../../service/menu.service";
import 'bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private menuService:MenuService) {
  }
 toggleMenu(){
this.menuService.toggle();
 }

}
