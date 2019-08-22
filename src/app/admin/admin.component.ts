import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { NavService } from '../services/nav.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterContentChecked {

  @ViewChild('appDrawer') appDrawer: MatDrawer;

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

	constructor(
    public navS:NavService,
   
  ) { }

	ngOnInit() {
  }
  ngAfterContentChecked(){
    if(window.innerWidth <= 400){
      this.sideNavOpened = false
    }else{
      this.sideNavOpened = true
    }
  }
  ngAfterContentInit(){
    this.navS.appDrawer = this.appDrawer
  }
}
