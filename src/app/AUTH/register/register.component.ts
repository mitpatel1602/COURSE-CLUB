import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('name')name!:ElementRef;
  @ViewChild('email')email!:ElementRef;
  @ViewChild('password')password!:ElementRef;

  constructor(private registerService:AuthService , private router:Router){}

  registerFunction(){  
    let name = this.name.nativeElement.value;
    let email = this.email.nativeElement.value;
    let password = this.password.nativeElement.value;

    if(name === '' && email === '' && password === '')
    {
      alert('enter all field')
      return;
    }
    this.registerService.userSignUp(name,email,password).subscribe((result)=>{
      if(result){
        this.router.navigate(['login']);
        alert('success')
      }
    })


  }

}
