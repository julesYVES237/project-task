import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authenticationService: AuthService) { }
  username:string;
  email: string;
  isAdmin: boolean

  ngOnInit(): void {
    this.username=this.authenticationService.getUserFirstName()+' '+this.authenticationService.getUserLastName();
    this.email=this.authenticationService.getUserLogin();
    this.isAdmin =this.authenticationService.isAdmin();
  }


}
