import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './comp/about/about.component';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { HomeComponent } from './comp/home/home.component';

const routes: Routes = [
  {path:"",component:DashboardComponent, children:[
    {path:"about",component:AboutComponent},
    {path:"home",component:HomeComponent},
    {path: "",redirectTo:"/admin/home",pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
