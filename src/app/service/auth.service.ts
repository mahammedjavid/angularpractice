import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  isAthuthenticated = false

  AfterLogin(){
    return this.isAthuthenticated = true
  }



  getData(){
    let url = "https://jsonplaceholder.typicode.com/todos/"
    return this.http.get(url)
  }

  postData(data:any){
    return this.http.post("https://jsonplaceholder.typicode.com/todos/",data)
  }
  


}
