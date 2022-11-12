import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.minLength(2),Validators.required,Validators.email]),   //Validators.pattern('[a-zA-Z]')
    password : new FormControl('',Validators.required)
  })

  constructor(private route:Router,private authservice:AuthService) { 
  }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.authservice.AfterLogin()
    this.route.navigate(['/admin/home'])
    console.log(this.loginForm.value)
   
  }
  get email(){
    return this.loginForm.get('email')
  }
  get pass(){
    return this.loginForm.get('password')
  }

}
