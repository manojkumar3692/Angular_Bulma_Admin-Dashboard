import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminComponent } from '../main-admin/main-admin.component'
import {AppComponent} from '../app.component'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {ProfileSettingComponent} from '../profile-setting/profile-setting.component'
const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'main-admin',
        component: MainAdminComponent,
    },
    {
        path:'profile-setting',
        component:ProfileSettingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }