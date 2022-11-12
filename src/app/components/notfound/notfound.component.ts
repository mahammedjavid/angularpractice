import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  form = new FormGroup({
    name : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.form.value)
  }

}
