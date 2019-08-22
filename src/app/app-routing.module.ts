import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componets
import { LoginComponent } from './acesso/login/login.component';
import { ResetComponent } from './acesso/reset/reset.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/views/dashboard/dashboard.component';
import { InternetComponent } from './utils/internet/internet.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'reset', component: ResetComponent},
  {path:'admin', component: AdminComponent, children:[
    {path:'', component: DashboardComponent}
  ]},
  {path:'internet', component: InternetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
