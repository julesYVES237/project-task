import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainlayoutComponent} from './layouts/mainlayout/mainlayout.component';
import {EmployeesComponent} from './content/admin/employees/employees.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './services/auth-guard';
import {DashboarduserComponent} from './content/user/dashboarduser/dashboarduser.component';
import {EditprofileComponent} from './content/user/editprofile/editprofile.component';
import {VacationrequestsComponent} from './content/user/vacationrequests/vacationrequests.component';
import {TasksuserComponent} from './content/user/tasksuser/tasksuser.component';
import {DashboardadminComponent} from './content/admin/dashboardadmin/dashboardadmin.component';
import {TasksadminComponent} from './content/admin/tasksadmin/tasksadmin.component';
import {VacationsComponent} from './content/admin/vacations/vacations.component';
import {ContactadminComponent} from './content/user/contactadmin/contactadmin.component';
import {HomeComponent} from './home/home.component';
import { HeaderComponent } from './header/header.component';


//import {IndexComponent} from '../app/index/index.component';
const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'
},
{
  path: 'home',
    component: HomeComponent
},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  /*{
    path: 'index',
    component: IndexComponent
  },*/
  {
    path: 'ems',
    component: MainlayoutComponent, canActivate: [AuthGuard],

    children: [{
      path: 'dashboarduser',
      component: DashboarduserComponent, canActivate: [AuthGuard]
    },
      {
        path: 'edit',
        component: EditprofileComponent, canActivate: [AuthGuard]
      },
      {
        path: 'tasksuser',
        component: TasksuserComponent, canActivate: [AuthGuard]
      },
      {
        path: 'vacationreq',
        component: VacationrequestsComponent, canActivate: [AuthGuard]
      },
      {
        path: 'contactadmin',
        component: ContactadminComponent, canActivate: [AuthGuard]
      },
      {
        path: 'dashboardadmin',
        component: DashboardadminComponent, canActivate: [AuthGuard]
      },
      {
        path: 'employees',
        component: EmployeesComponent, canActivate: [AuthGuard]
      },
      {
        path: 'tasksadmin',
        component: TasksadminComponent, canActivate: [AuthGuard]
      },
      {
        path: 'vacations',
        component: VacationsComponent, canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
