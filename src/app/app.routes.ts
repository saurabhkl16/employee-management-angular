import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { DashboardOverview } from './components/dashboard-overview/dashboard-overview';
import { EmployeesComponent } from './components/employees/employees';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: DashboardComponent,
  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: DashboardOverview,
      },
      {
        path: 'employee-list',
        component: EmployeesComponent,
      },
    ],
  },
];
