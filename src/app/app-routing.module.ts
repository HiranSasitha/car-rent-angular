import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './component/car/car.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { AuthGuard } from './component/auth/auth.guard';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { AddNewCustomerComponent } from './component/add-new-customer/add-new-customer.component';
import { CustomerMaterialComponent } from './component/customer-material/customer-material.component';

const routes: Routes = [
  {path:"car",component:CarComponent},
  {path:"home",component:HomeComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard],data:{roles:['ROLE_ADMIN']}},
  {path:"user",component:UserComponent,canActivate:[AuthGuard],data:{roles:['ROLE_USER']}},
  {path:"login",component:LoginComponent},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"customer", component:CustomerMaterialComponent,canActivate:[AuthGuard],data:{roles:['ROLE_ADMIN']}},
  {path:'details/:id', component:CustomerDetailsComponent,canActivate:[AuthGuard],data:{roles:['ROLE_ADMIN']}},
  {path:'add-new-customer', component:AddNewCustomerComponent,canActivate:[AuthGuard],data:{roles:['ROLE_ADMIN']}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
