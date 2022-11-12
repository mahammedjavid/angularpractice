import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"",redirectTo:"/login",pathMatch:'full'},
  {path:"admin",loadChildren:()=>import("./PrivateModule/admin/admin.module").then((x)=>x.AdminModule), canActivate:[AuthGuard] },
  {path:"**",component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
