import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('name')name!:ElementRef
  @ViewChild('password')password!:ElementRef

  constructor(private loginService:AuthService , private router:Router){}

  loginFunction(){

    let userName = this.name.nativeElement.value;
    let userPassword = this.password.nativeElement.value;

    if(userName === '' && userPassword === '')
    {
      alert('fill th field first');
      return
    }
    if(this.loginService.userSignIn(userName , userPassword)!){
        return
    }
    else{
        this.loginService.adminLogin(userName,userPassword)
    }
  }

}
