import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './component/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from "@angular/material/icon";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";
import { ContentComponent } from './component/content/content.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { CarComponent } from './component/car/car.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './component/auth/auth.guard';
import { AuthInterceptor } from './component/auth/auth.interceptor';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { AddNewCustomerComponent } from './component/add-new-customer/add-new-customer.component';
import { CustomerMaterialComponent } from './component/customer-material/customer-material.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { A11yModule } from '@angular/cdk/a11y';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TestComponent } from './component/test/test.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ColorSketchModule } from 'ngx-color/sketch';
import {ColorAlphaModule} from "ngx-color/alpha";
import {ColorBlockModule} from "ngx-color/block";
import {ColorChromeModule} from "ngx-color/chrome";
import {ColorCircleModule} from "ngx-color/circle";
import {ColorCompactModule} from "ngx-color/compact";
import {ColorGithubModule} from "ngx-color/github";
import {ColorHueModule} from "ngx-color/hue";
import {ColorMaterialModule} from "ngx-color/material";
import {ColorPhotoshopModule} from "ngx-color/photoshop";
import {ColorSliderModule} from "ngx-color/slider";
import {ColorSwatchesModule} from "ngx-color/swatches";
import {ColorTwitterModule} from "ngx-color/twitter";
import {ColorShadeModule} from "ngx-color/shade";
import { ColorPickerModule } from 'ngx-color-picker';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    ForbiddenComponent,
    CarComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddNewCustomerComponent,
    CustomerMaterialComponent,
    TestComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
    A11yModule,
    MatPaginatorModule,
    AngularEditorModule,
    ColorSketchModule,
    ColorAlphaModule,
    ColorBlockModule,
    ColorChromeModule,
    ColorCircleModule,
    ColorCompactModule,
    ColorGithubModule,
    ColorHueModule,
    ColorMaterialModule,
    ColorPhotoshopModule,
    ColorSliderModule,
    ColorSwatchesModule,
    ColorTwitterModule,
    ColorShadeModule,
    ColorPickerModule


  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
