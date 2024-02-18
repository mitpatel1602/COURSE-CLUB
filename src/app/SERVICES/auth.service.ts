import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from '../MODEL/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUserData:userModel[] = [];
  userData:userModel[] = [];
  url:string='http://localhost:3000/newUser'

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(name:string,email:string,password:string){
    return this.http.post('http://localhost:3000/newUser',{name,email,password})
  }
  userSignIn(name:string,password:string){ 
    this.http.get<userModel[]>('http://localhost:3000/newUser').subscribe(data=>{
        data.forEach(s=>{
          if(name === s.name && password === s.password){
            this.loginUserData.push(s)
            localStorage.setItem('LoginUser',JSON.stringify(this.loginUserData))
            this.router.navigate(['nav/home'])
            alert("success");
            return
          }
        });
    })
  }
  adminLogin(name:string,password:string){ 
    this.http.get<userModel[]>('http://localhost:3000/admin').subscribe(data=>{
        data.forEach(s=>{
          if(name === s.name && password === s.password){
            this.loginUserData.push(s)
            localStorage.setItem('LoginUser',JSON.stringify(this.loginUserData))
            this.router.navigate(['admin'])
            alert("success");
            return
          }
        });
    })
  }
  updateUserInfo(id:number , name:string , email:string , password:string) : Observable<userModel[]>{
    console.log(id);
    const id1=`${this.url}/${id}`
    
    return this.http.put<userModel[]>(id1,{name:name,email:email,password:password});
  }

}
