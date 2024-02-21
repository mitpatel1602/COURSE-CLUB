import { Router , Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Course-Club';
  showLoader:boolean = false;

  route : Router = inject(Router)
  
  ngOnInit(): void {
    this.route.events.subscribe((routerEvent : Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoader = true;
      }
      if(  routerEvent instanceof NavigationEnd    || 
           routerEvent instanceof NavigationCancel || 
           routerEvent instanceof NavigationError)
      {
        this.showLoader = false;
      } 
    })
  }
}
