import { userModel } from 'src/app/MODEL/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/SERVICES/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  name:string|any = null;
  email:string|null = null;
  id:number|null = null;
  password:string|null = null;
  userLoginData:userModel[] = [];

  constructor(private editAdmin:AuthService , private router:Router){}


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
    this.editAdmin.updateAdminInfo(this.id! , this.name, this.email!, this.password!).subscribe((e)=>{
      if(e)
      {
        alert('record updated please login again !');
        this.router.navigate(['login'])
        
      }
    })
  }

}
