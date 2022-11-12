import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // let someArray: Array<{ id: number, name: string }> = []
  userdata :any = []

  totalRecords:any
  currrentPageNo:number = 1

  addForm:any = new FormGroup({
    userId : new FormControl(),
    title : new FormControl(),
    id  : new FormControl(),
    completed : new FormControl(),
})


  constructor(private authservice:AuthService) {
    this.authservice.getData().subscribe((x=>{
      this.userdata = x
      this.totalRecords = Object.keys(x).length
    }))
    
   }

  ngOnInit(): void {
  }

  AddUserData(formdata:any){
   this.authservice.postData(formdata).subscribe((x)=>console.log(x))
  }

}
