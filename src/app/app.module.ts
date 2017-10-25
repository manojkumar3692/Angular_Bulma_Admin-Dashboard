import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MainAdminComponent} from './main-admin/main-admin.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { DaterangepickerDirective } from './date-picket.directive';



@NgModule({
  declarations: [
    AppComponent,
    MainAdminComponent, 
    CommonHeaderComponent, DashboardComponent, ProfileSettingComponent, DaterangepickerDirective
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
