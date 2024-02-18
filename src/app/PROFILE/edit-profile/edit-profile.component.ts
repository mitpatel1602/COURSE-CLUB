import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/MODEL/user.model';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

name:string|any = null;
email:string|null = null;
id:number|null = null;
password:string|null = null;
userLoginData:userModel[] = [];


  constructor(private http:HttpClient , private authService:AuthService , private router :Router ){}

  ngOnInit(): void { 
     this.userLoginData = JSON.parse(localStorage.getItem('LoginUser')!)
     this.userLoginData.find((s)=>{
        this.name = s.name
        this.email = s.email
        this.id = s.id
        this.password = s.password
      })
  }



  updateProfileFunction(){
      this.authService.updateUserInfo(this.id! , this.name! , this.email! , this.password! ).subscribe(e=>{
           alert('data Updated please login again');
           this.router.navigate(['login']);
           
      })
  }

}
